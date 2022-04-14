import outSuccessCallImg from '../../assets/icons/calls_icons/out_success_call.svg'
import outFailCallImg from '../../assets/icons/calls_icons/out_fail_call.svg'
import inCallImg from '../../assets/icons/calls_icons/in_call.svg'

interface IProps {
    in_out: '0' | '1'
    status: 'Дозвонился' | 'Не дозвонился'
}

const CallTypeImg = ({
    in_out,
    status,
}: IProps) => {
    //in_out === 1 исходящий
    const isOutCall = in_out === '0'
    const isSuccess = status === 'Дозвонился'
    const imgSrc =
        isOutCall && isSuccess
            ? outSuccessCallImg
            : isOutCall && !isSuccess
            ? outFailCallImg
            : inCallImg
    return (
        <div className='wdth_51 callsList_item__type'>
            <img src={imgSrc} alt='callType' />
        </div>
    )
}

export default CallTypeImg