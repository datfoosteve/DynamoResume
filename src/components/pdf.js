import { Document, Page, View, Text, Image, PDFViewer, StyleSheet, Font} from '@react-pdf/renderer';
import {useState, useEffect} from 'react'

const styles = StyleSheet.create({  
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },  
    section: {  
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 10
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Oswald'
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
        fontFamily: 'Oswald'
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Lato'
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    footer: {
        padding: '100px',
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
});

const PDF = ({ data }) => {

    const [resume, setResume] = useState([])

    useEffect(() => {
        if (data) {
            setResume(data.resume)
        }
    }, [data])

    return (
        <PDFViewer className="pdfViewer">
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text style={styles.title}>My resume</Text>
                        {resume.map((resume, index) => {
                            return (
                                <View key={index}>
                                    <Text style={styles.subtitle}>{resume.title}</Text>
                                    <Text style={styles.text}>{resume.description}</Text>
                                </View>
                            )
                        })}
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}

const PDFView = ()  => {
    
    const [client, setClient] = useState(null)

    useEffect(() => {
        fetch('resumeData.json')
            .then(res => res.json())
            .then(data => setClient(data))
    }, [])

    return (
        <div className="pdfViewer">
            {data && <PDF data={data} />}
        </div>
    )


}

export default PDFView
