import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'

function List() {
    const imgPath = "https://placehold.jp/240x240.png"
    return(
        <div>
            {/* card */}
            <Card sx={{maxWidth: 700}}>
                {/* 店名 */}
                <Typography variant="h5">
                    チャーハンキング
                </Typography>
                {/* 日付 */}
                <Typography variant="body2" color="text.secondary">
                    2024/3/6
                </Typography>
                {/* ジャンル */}
                <Typography variant="body2" color="text.secondary">
                    中華
                </Typography>
                {/* 評価(readonly) */}
                <Rating value={2} readOnly />
                {/* 画像 */}
                <img src={imgPath} alt="一時的な画像"/>
            </Card>
        </div>
    )
}

export default List