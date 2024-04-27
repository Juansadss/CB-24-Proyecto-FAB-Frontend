import './Performance.css';
import '../main-menu/main-menu.css';
import '../../index.css';
import './OperationsLayout.css';
import Title from './WindowTitle';
interface LayoutProps {
    childComponent: React.ComponentType<any>;
    message: string;
}

const OperationsLayout: React.FC<LayoutProps> = ({ childComponent: ChildComponent, message }) => {
    return (
        <div className='flex layout-container'>
            <div className='side-bar-container'>

            </div>
            <div className='container-form'>
                <Title title={message}></Title>
                <ChildComponent></ChildComponent>
            </div>
        </div>
    );
}

export default OperationsLayout;
