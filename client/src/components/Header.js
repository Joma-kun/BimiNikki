import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <Link to="/">
                <Button variant="contained">ホーム</Button>
            </Link>
            <Link to="/submit-page">
                <Button variant="contained">日記を追加</Button>
            </Link>
        </div>
    )
}

export default Header