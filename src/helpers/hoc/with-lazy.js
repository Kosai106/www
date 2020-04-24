import { useState, createElement, useEffect } from 'react'
import { isFunction, aspectRatio, template } from 'helpers'
import { Placeholder } from 'components/elements'
import noop from 'lodash/noop'

const compute = (obj, key, value) =>
  isFunction(obj[key]) ? obj[key](value) : obj[key]

const computedProps = (attr, compiledAttr, props, { isLoading }) => ({
  ...props,
  [attr]: compiledAttr,
  height: compute(props, 'height', isLoading) || aspectRatio.height,
  width: compute(props, 'width', isLoading) || aspectRatio.width,
  style: compute(props, 'style', isLoading)
})

const LazyMedia = (Component, { tagName = 'img', attr = 'src' } = {}) => ({
  lazy = true,
  loading = true,
  [attr]: rawAttribute,
  onError = noop,
  ...rest
}) => {
  const compiledAttr = template(rawAttribute)

  if (!lazy) {
    return createElement(
      Component,
      computedProps(attr, compiledAttr, rest, { isLoading: false })
    )
  }

  const [isLoading, setLoading] = useState(loading)

  useEffect(() => {
    const tag = document.createElement(tagName)
    tag.onerror = onError
    tag.onload = () => {
      tag.onload = null
      tag.onerror = null
      setLoading(false)
    }
    tag[attr] = compiledAttr
  }, [])

  return createElement(
    isLoading ? Placeholder : Component,
    computedProps(attr, compiledAttr, rest, { isLoading })
  )
}

export default LazyMedia
