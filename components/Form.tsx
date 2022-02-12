import { IconExclamation } from 'components/icons'
import { Button, Input } from 'components/ui'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Inputs {
  name: string
  position: string
}

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = ({ name, position }) => {
    console.log({ name, position })
    alert('Form submitted!')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xs space-y-6" role="form">
      <div className="space-y-2">
        <label className="font-semibold" htmlFor="name">
          Name
        </label>

        <Input name="name" id="name" register={register('name', { required: true })} errors={errors.name} />

        {errors.name && <WarningMessage message="This field is required" />}
      </div>

      <div className="space-y-2">
        <label className="font-semibold" htmlFor="position">
          Position
        </label>

        <Input name="position" id="position" register={register('position')} />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  )
}

interface WarningMessageProps {
  message: string
}
const WarningMessage = ({ message }: WarningMessageProps) => {
  return (
    <div className="text-sm text-red-500" role="alert">
      <IconExclamation className="mr-1 inline-block h-5 w-5 stroke-red-500" />
      {message}
    </div>
  )
}
