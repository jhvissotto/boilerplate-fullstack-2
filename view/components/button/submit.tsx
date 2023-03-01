import { libs } from '~/src'

// ======================================================================= //
// ================================ TYPES ================================ //
// ======================================================================= //
module Types {
    export type Style = {
        color: string
    }
    export type Props = {
        onClick?: () => void
    }
}

// ======================================================================= //
// ================================ STYLE ================================ //
// ======================================================================= //
const useStyle = ({ color }: Types.Style) => ({
    S: {
        root: libs.helpers.css`
            background-color: blue;
        `,
    },
})

// =========================================================================== //
// ================================ COMPONENT ================================ //
// =========================================================================== //
export function Submit({ onClick }: Types.Props) {
    const { S } = useStyle({ color: '123' })

    return (
        <button name={Submit.name} css={S.root} onClick={onClick}>
            Submit
        </button>
    )
}