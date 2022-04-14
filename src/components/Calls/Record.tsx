import axios from "axios"
import { useEffect, useState } from "react"

const Record = ({record, partnership_id}:{record: string, partnership_id: string}) => {
    const [apiRecord, setApiRecord] = useState('')

    useEffect(()=>{
        (async()=>{
            if(!!record){
                try {
                    const {data: audio} = await axios.post(`https://api.skilla.ru/mango/getRecord?record=${record}&partnership_id=${partnership_id}`,{},{
                        headers: {
                            Authorization: `Bearer qwerty123`,
                            'Content-type': 'audio/mpeg; audio/x-mpeg; audio/x-mpeg-3; audio/mpeg3',
                            'Content-Transfer-Encoding': 'binary',
                            'Content-Disposition': 'filename="record.mp3"',
                        },
                    })
                    console.log('audio', audio)
                    setApiRecord(audio)
                } catch (error) {
                    console.log('Record',error)
                }
            }
        })()
    },[record, partnership_id])

    return (
        <>
        {   !!apiRecord ?
            <div className='wdth_461'>
                <div className='callsList_item__actions__button flex_center'>
                    Распознать
                </div>
            </div> 
            :
            <div className='wdth_461 callsList_item__actions'>
                Скрипт не использован
            </div>
        }
        </>
    )
}

export default Record