// https://nextjs.org/docs/advanced-features/custom-app

import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
