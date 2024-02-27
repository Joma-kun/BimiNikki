import * as React from 'react'
import Header from "./Header"
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import dayjs from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import { MenuItem } from '@mui/material'

// 店の情報を追加する画面
function SubmitPage() {
    const [storeName, setStoreName] = React.useState("")
    const [genre, setGenre] = React.useState("")
    const [value, setValue] = React.useState(0)
    const [date, setDate] = React.useState(dayjs())


    return (
        <div>
            <Header />
            <h1>Submit Page</h1>
            {/* card */}
            <Card sx={{maxWidth: 300}}>
                <h2>Submit</h2>
                {/* 店名 */}
                <TextField 
                    label="店名" 
                    variant="standard" 
                    value={storeName} 
                    onChange={(e) => setStoreName(e.target.value)}
                />
                {/* ジャンル */}
                <InputLabel id="demo-simple-select-label">ジャンル</InputLabel>
                <Select 
                    label="ジャンル"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                >
                    <MenuItem value={10}>和食</MenuItem>
                    <MenuItem value={20}>洋食</MenuItem>
                    <MenuItem value={30}>中華</MenuItem>
                    <MenuItem value={40}>アジア</MenuItem>
                    <MenuItem value={100}>その他</MenuItem>
                </Select>
                <br></br>
                {/* 評価 */}
                <Rating
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                {/* 写真は後ほど実装 */}
                {/* 日付 */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)}/>
                </LocalizationProvider>
                {/* 送信ボタン */}
                <Button variant="contained">submit</Button>
            </Card>
        </div>
    )
}

export default SubmitPage