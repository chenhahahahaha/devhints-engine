// declare module '*.scss'
// declare module '*.css'

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}
