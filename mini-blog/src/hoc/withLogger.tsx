import { useEffect } from 'react'
import type { ComponentType } from 'react'


function withLogger<P extends object>(
  WrappedComponent: ComponentType<P>,
  label?: string,
) {
  const name =
    label || WrappedComponent.displayName || WrappedComponent.name || 'Component'

  function ComponentWithLogger(props: P) {
    useEffect(() => {
      console.log(`[withLogger] ${name} mounted`)

      // this returned function runs when the component unmounts
      return () => {
        console.log(`[withLogger] ${name} unmounted`)
      }
    }, [])

    return <WrappedComponent {...props} />
  }

  // nicer name in React DevTools
  ComponentWithLogger.displayName = `withLogger(${name})`

  return ComponentWithLogger
}

export default withLogger