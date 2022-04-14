
const DateTime = ({ date }: { date: Date }) => {
    let formatData = new Date(date)

    return (
        <div className='wdth_89 callsList_item__time'>
            {formatData.getHours().toString().padStart(2, '0')}:
            {formatData.getMinutes().toString().padStart(2, '0')}
        </div>
    )
}

export default DateTime