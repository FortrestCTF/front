import Header from '../../../../Components/Header/Header'
import SubNavbar from '../../Components/SubNavbar'
import FlagItem from './FlagItem'

export default function Flags()
{
    return (
        <>
            <Header />
            <SubNavbar />
            <section>
                <FlagItem name={"The cake is a lie !"} value={800} flag_id={1} done={false}/>
            </section>
        </>
    )
}