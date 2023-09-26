type TextAreaProps = React.HTMLProps<HTMLTextAreaElement>

const TextArea = ({ ...rest }: TextAreaProps) => {
  return (
    <textarea
      className="font-default font-regular min-h-80 focus:border-ignite300 placeholder-gray400 resize-y rounded-sm border-2 border-gray900 bg-gray900 p-3 px-4 text-sm text-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      {...rest}
    />
  )
}

export default TextArea
