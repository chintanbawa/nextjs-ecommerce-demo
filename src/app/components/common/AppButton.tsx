import React from 'react'

//types
import { TAppButton } from 'types'

const AppButton = ({
  isLoading,
  className,
  loaderColor = 'bg-skin-button-accent',
  ...props
}: TAppButton) => {
  return (
    <button
      {...props}
      className={`w-full h-[40px]  rounded-md uppercase hover:scale-105 transition duration-150 ease-in-out ${className}`}
      onClick={(e) => {
        e.stopPropagation()
        if (props?.onClick) props?.onClick(e)
      }}
    >
      {isLoading ? (
        'Loading...'
      ) : (
        props.children
      )}
    </button>
  )
}

export default AppButton
