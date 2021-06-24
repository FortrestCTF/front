import Image from 'next/image'
import Header from '../../../../Components/Header/Header'
import SubNavbar from '../../Components/SubNavbar'
import Table from '../../../../Components/Table/Table'

export default function LeaderBoard() {
    return (
        <>
        <Header />
        <SubNavbar />
		{/* <div style={{width: '100%', height: '100%', display:'flex', justifyContent: 'center', flexDirection: 'column', alignItems:'center'}}> */}
		<div style={{width: '100%', position: 'fixed', display: 'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
		<h1>LeaderBoard</h1>
			<main>
				<table style={{borderSpacing:0}}>
					<tbody>
						<Table username={"Name"} points={"Points"} />
						<Table username={"root"} points={0} />
						<Table username={""} points={0} />
						<Table username={""} points={0} />
						<Table username={""} points={0} />
						<Table username={""} points={0} />
						<Table username={""} points={0} />
					</tbody>
				</table>
			</main>
		</div>
        </>
      )
    }