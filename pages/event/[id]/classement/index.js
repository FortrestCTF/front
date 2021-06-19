import Image from 'next/image'
import Link from 'next/link'
import Header from '../../../../Components/Header/Header'
import SubNavbar from '../../Components/SubNavbar'

export default function LeaderBoard() {
    return (
        <>
        <Header />
        <SubNavbar />
        <div style={{backgroundColor: '#C4C4C4'}}>
            <div>
                  {/* <Image
                    src="/trophee.png"
                    alt="logo"
                    width={70}
                    height={70}
                  /> */}
            </div>
        </div>
        </>
      )
    }