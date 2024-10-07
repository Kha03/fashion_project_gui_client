import {Box, Button, Typography} from '@mui/material'
import * as React from 'react'

export interface IDescriptionProductProps {
  description: string
}

export default function DescriptionProduct({description}: IDescriptionProductProps) {
  const [seeMore, setSeeMore] = React.useState(false)
  const handleToggleSeeMore = () => {
    if (seeMore) {
      const element = document.getElementById('description-product')
      if (element) {
        element.scrollIntoView({behavior: 'smooth'})
      }
    }
    setSeeMore(!seeMore)
  }
  return (
    <Box>
      <Box id='description-product' height={seeMore ? '100%' : '500px'} overflow={'hidden'}>
        <Typography component={'p'} mb={2} sx={{fontSize: '1.6rem'}}>
          Quần legging tập gym, yoga là sản phẩm không thể thiếu trong bộ trang phục của những người
          đam mê tập luyện, đặc biệt là các hoạt động thể thao như gym, yoga. Với thiết kế đơn giản,
          chất liệu thoáng khí và co giãn tốt, quần legging tập gym, yoga mang lại sự thoải mái và
          tự tin cho người dùng trong quá trình tập luyện.
        </Typography>
        <Typography component={'p'} mb={2} sx={{fontSize: '1.6rem'}}>
          Về kiểu dáng, quần legging tập gym, yoga có thiết kế ôm sát cơ thể, giúp tôn lên đường
          cong của người dùng. Thiết kế legging giúp người dùng có thể di chuyển dễ dàng trong các
          động tác tập luyện mà không gặp khó khăn hay cản trở. Với độ dài chân từ mắt cá đến mắt
          chân, quần legging tập gym, yoga giúp người dùng giữ ấm và bảo vệ da khỏi tác động của môi
          trường bên ngoài.
        </Typography>
        <Typography textAlign={'center'}>
          <img
            src={'./src/assets/img/product_1.png'}
            style={{maxWidth: '100%', height: 'auto', verticalAlign: 'middle'}}
          />
        </Typography>
        <Typography component={'p'} mt={2} sx={{fontSize: '1.6rem'}}>
          Chất liệu của quần legging tập gym, yoga cũng rất đa dạng, tùy vào mục đích sử dụng và sở
          thích của người dùng. Thông thường, quần legging tập gym, yoga được làm từ chất liệu
          cotton hoặc polyester, có khả năng thấm hút mồ hôi và thoáng khí tốt, giúp người dùng luôn
          cảm thấy khô ráo và thoải mái trong quá trình tập luyện. Ngoài ra, một số sản phẩm còn
          được làm từ chất liệu cao cấp như spandex, nylon, giúp tăng độ co giãn và đàn hồi cho quần
          legging, giúp người dùng có thể di chuyển và thực hiện các động tác tập luyện một cách
          linh hoạt và dễ dàng hơn. Màu sắc của quần legging tập gym, yoga cũng rất đa dạng và phong
          phú, từ màu sắc trung tính như đen, xám, trắng đến các màu sắc sáng tươi như vàng, xanh
          lá, hồng. Điều này giúp người dùng có thể lựa chọn sản phẩm phù hợp với sở thích cá nhân
          và tạo nét riêng cho bản thân khi tập luyện. Độ thoải mái của quần legging tập gym, yoga
          là một yếu tố quan trọng được đánh giá cao bởi người dùng.
        </Typography>
        <Typography component={'p'} mt={2} sx={{fontSize: '1.6rem'}}>
          Với chất liệu mềm mại và co giãn tốt, quần legging tập gym, yoga giúp người dùng tập trung
          vào việc thở đều và tập trung vào các động tác tập luyện. Điều này giúp đạt được hiệu quả
          tập luyện tốt hơn và giảm thiểu các chấn thương, đau nhức cơ thể. Kích thước của quần
          legging tập gym, yoga cũng rất đa dạng để phù hợp với các loại hình cơ thể của người dùng.
          Tuy nhiên, để đảm bảo sự thoải mái và dễ chịu, người dùng nên chọn kích thước phù hợp với
          cơ thể của mình. Quần legging tập gym, yoga phù hợp với mọi đối tượng từ nam giới, nữ
          giới, người già, trẻ em cho đến những người mới bắt đầu tập luyện hay những người có kinh
          nghiệm trong tập luyện. Với thiết kế đa dạng và phong phú, quần legging tập gym, yoga giúp
          người dùng tạo nên phong cách thời trang riêng và thể hiện sự chuyên nghiệp trong quá
          trình tập luyện.
        </Typography>
      </Box>
      <Box
        mt={2}
        sx={{
          textAlign: 'center',
          position: 'relative',
          ':before': {
            position: 'absolute',
            content: '""',
            left: 0,
            right: 0,
            bottom: '100%',
            height: '100px',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 17%, #fff 93.12%)',
          },
        }}
      >
        <Button variant={'outlined'} onClick={handleToggleSeeMore} size='large'>
          {seeMore ? 'Thu gọn' : 'Xem thêm'}
        </Button>
      </Box>
    </Box>
  )
}
