const Movie = require('../models/Movie')
class MovieController {

    async getMovies (req, res) {
        try {
            const movie = await Movie.find({})
            res.json({success: true, movie})
        } catch {
            res.json({success: false})
        }
    }

    async getMovie (req, res) {
        try {
            const movie = await Movie.findOne({slug: req.params.slug}).populate('category').exec()  
            res.json({success: true, movie})
        } catch {
            res.json({success: false})
        }
    }

    async addMovie (req, res) {
        try {
            const m = {
                title: "Avatar: The Way of Water",
                titleVi: 'Avatar: Dòng Chảy Của Nước',
                cast: ['Sam Worthington', 'Sigourney Weaver', 'Stephen Lang', 'Cliff Curtis'],
                image: 'https://i1-giaitri.vnecdn.net/2022/11/02/avatar-2-1-9810-1667403445.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=yB8VVH0MwIl03mMIxK52Lw',
                trailer: 'https://www.youtube.com/embed/gq2xKJXYZ80',
                director: 'James Cameron',
                duration: 192,
                description: "Hơn một thập kỷ sau khi người Navi đẩy lùi cuộc xâm lược của loài người vào Pandora bởi Cơ quan Quản lý Phát triển Tài nguyên (RDA), Jake Sully sống với tư cách là tộc trưởng của gia tộc Omaticaya và lập gia đình với Neytiri, bao gồm các con trai Neteyam và Lo'ak, con gái Tuk, con gái nuôi Kiri (được sinh ra từ thế thân trơ của Grace Augustine), và một cậu bé loài người tên là Spider, con trai của Đại tá Miles Quaritch, người sinh ra trên Pandora và không thể được chuyển đến Trái đất trong trạng thái đông lạnh do còn nhỏ. Trước sự thất vọng của người Na'vi, RDA quay trở lại để chuẩn bị cho thế giới quê hương Pandora của họ cho sự xâm chiếm của con người, với lý do Trái đất đang chết. Trong số những RDA mới đến có 'người tái tổ hợp', thế thân Na'vi được cấy ghép tâm trí và ký ức của những người lính đã chết, với người tái tổ hợp của Quaritch đóng vai trò là thủ lĩnh của họ.",
                producer: 'Lightstorm Entertainment',
                country: 'Mỹ',
                premiereDate: '2023-03-24',
                category: ['641b17e3b0b93b2d6e57dfdd', '641b18211f7f4a4333fcb338']
            }
            const movie = new Movie(m)
            await movie.save()
            
    
            res.json({success: true, movie})
            
        } catch(e) {
            console.log(e)
            res.json({success: false})
        }
    }

    async editMovie (req, res) {
        try {
      
         
            await Movie.updateOne({_id: req.params.id}, req.body)
  
            res.json({success: true})
            
        } catch(e) {
            res.json({success: false})
        }
    }

  
}

module.exports = new MovieController()