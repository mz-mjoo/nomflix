import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const globalStyles = createGlobalStyle `
    ${reset}

    a {
        text-decoration: none;
        color:inherit;
    }

    body {
        color: #000;
    }
`

export default globalStyles