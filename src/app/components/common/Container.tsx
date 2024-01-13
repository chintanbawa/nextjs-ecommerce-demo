import React from 'react'

const Container = ({
  className,
  isLoading,
  error,
  children,
}: {
  className?: string
  isLoading?: boolean
  error?: Error | null
  children: React.ReactNode
}) => {
  const ViewLoader = () => {
    if (error)
      return <p className="text-primary text-center">Oh no, there was an error!</p>
      
    if (isLoading)
      return <p className="text-primary text-center mt-3">Loading...</p>

    return children
  }

  return (
    <main className={`max-w-[1200px] m-auto p-[30px] ${className}`}>
      <ViewLoader />
    </main>
  )
}
export default Container
