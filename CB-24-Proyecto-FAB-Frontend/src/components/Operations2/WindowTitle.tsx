
import './WindowTitle.css';

interface TitleProps {
    title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <div className='title-container'>
            <h1 className='title'>{title}</h1>
            <hr />
        </div>
    );
}

export default Title;
