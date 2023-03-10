import React, {ReactNode} from 'react';
import Header from "../components/Header";

interface Props {
    children: ReactNode;
}
const LayOut: React.FC<Props> = ({children}) => {
    return (
        <div className='bg-cyan-700'>
            <Header/>
            <main>{children}</main>

        </div>
    );
};

export default LayOut;