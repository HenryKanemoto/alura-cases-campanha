import NextLink from "next/link"

export default function Link({children, href, ...props}) {
    return (
        <NextLink href={href} {...props}>
            {/* Nas versões antes da 13 do next, aqui teria um <a>*/}
            {children}
        </NextLink>
    )
}