import HeaderBox from '@/components/header'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
    const loggedIn = {firstName: 'Adrian', lastName: 'JSM', email : 'contact@us.com'};
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>

                <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transactions."
                />

                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.45}
                />

            </header>
            Recent Transactions
        </div>


        <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50},{currentBalance: 200.50}]}
         />


    </section>
  )
}

export default Home