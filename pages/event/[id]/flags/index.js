import Header from '../../../../Components/Header/Header'
import SubNavbar from '../../Components/SubNavbar'
import FlagItem from './FlagItem'

import styles from './flags.module.css'

export default function Flags()
{
    return (
        <>
            <Header />
            <SubNavbar />
            <section className={styles.maincontainer}>
                <FlagItem name={"The cake is a lie !"} value={800} flag_id={1} done={false} url={"http://fesse"} flag={"flag"}/>
                <FlagItem name={"The cake is a lie !"} value={800} flag_id={2} done={true} url={"http://fesse"} flag={"flag"}/>
                <FlagItem name={"The cake is a lie !"} value={800} flag_id={3} done={false} url={"http://fesse"} flag={"flag"}/>
            </section>
        </>
    )
}