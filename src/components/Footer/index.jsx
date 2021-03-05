import { useEffect, useState } from "react"

function Footer() {

    const [year, setYear] = useState('')

    useEffect(() => {

        const now = new Date();
        const year = now.getFullYear();
        setYear(year)

    }, []);

    return <footer>
        &copy; {year} 版权归李奇所有
    </footer>
}

export default Footer