import React, {useEffect, useState} from 'react';
import styles from './Clock.module.scss'

type ClockPropsType = {}
const getTime = (num: number) => num < 10 ? '0' + num : num

export const Clock = (props: ClockPropsType) => {

    const getSeconds = () => {
        return Number(date.getSeconds())
    }

    const [date, setDate] = useState<Date>(new Date())
    const [seconds, setSeconds] = useState(getSeconds())


    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
            setSeconds(sec => sec + 1)
        }, 1000)

        return () => clearInterval(intervalID)
    }, [])

    const deg = 6

    const hoursArrow = getTime(date.getHours() * 30)
    const minutesArrow = getTime(date.getMinutes() * deg)
    const secondsArrow = getTime(seconds * deg)

    return (
        <div className={styles.clockWrapper}>
            <div className={styles.hour}>
                <div className={styles.hours}
                     style={{transform: `rotate(${+hoursArrow + (+minutesArrow / 12)}deg)`}}>{}</div>
            </div>
            <div className={styles.minute}>
                <div className={styles.minutes} style={{transform: `rotate(${+minutesArrow}deg)`}}>{}</div>
            </div>
            <div className={styles.second}>
                <div className={styles.seconds} style={{transform: `rotate(${+secondsArrow}deg)`}}>{}</div>
            </div>
        </div>
    )
};
