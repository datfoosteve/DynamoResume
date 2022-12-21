import dynamic from "next/dynamic";
import { useEffect, useState } from "react"

const InvoicePDF = dynamic(() => import("./pdf"), { ssr: false });

const View = () => {
    const [client, setClient] = useState(false);

    useEffect(() => {
        fetch('resumeData.json')
            .then(res => res.json())
            .then(data => setClient(data))
    }, [])

    return (
        <div>
            {InvoicePDF/>}
        </div>
    )
}

export default View