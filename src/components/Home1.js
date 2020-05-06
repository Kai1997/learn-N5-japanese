import React, { Component } from 'react'
import {
  Animated,
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
  Platform,
  TouchableOpacity
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as theme from '../common/utilities/themetest';


const { width, height } = Dimensions.get('window');
const mocks = [
  {
    id: 6,
    saved: true,
    title: 'Giới thiệu',
    description: 'Tiếng Nhật luôn được đánh giá là ngôn ngữ khó nên phải đầu tư rất nhiều thời gian, công sức mới có thể thành công. Nhưng bù lại , nếu bạn có thể sử dụng tiếng Nhật tốt thì mức lương sẽ rất cao , bình thường là khoảng 10- 15 triệu, khá thì 20-25 triệu, nếu giỏi có thể được 40 triệu trở nên cùng rất nhiều cơ hội sang Nhật làm việc, được tiếp cận với nền văn hóa văn minh, hiện đại , những điều tốt đẹp để bạn có thể phát triển bản thân rất tốt.',
    uri: require('../assert/imgs/intro.png'),
    images: [
      {uri:require('../assert/imgs/intro.png') },
      {uri:require('../assert/imgs/intro.png') },
    ],
    data: [
      {
        id: "1", title: "Giới thiệu chung", content: 'Đọc bài', lession: [
          { id: "1", text: "<p>Tại Việt Nam,<a> tiếng Nhật</a> được giới chuyên gia đánh giá là 1 trong 3 ngoại ngữ thông dụng và được đưa vào giảng dạy trong hệ thống giáo dục từ trung học cơ sở đến đại học trong cả nước. <p>" },
          { id: "2", text: " Ngoài ra, còn có rất nhiều trung tâm Tiếng Nhật được mở ra để đáp ứng nhu cầu học tập ngày một nhiều của học viên. Mỗi năm có hàng nghìn người theo học tiếng Nhật và con số này sẽ không ngừng tăng." },
          {
            id: "3", text: 'Tuy nhiên lượng cung vẫn không đủ lượng cầu.'
          },
          { id: "4", text: "Lượng cầu tuyển dụng các vị trí biết tiếng Nhật vẫn không hề giảm , nhất là các vị trí đòi hỏi năng lực tiếng Nhật tốt, nhiều vị trí có mức lương cực cao nhưng vẫn để trống bởi không tuyển được người. Nguyên nhân đa phần là do có nhiều người học nhưng đa phần thường bỏ dở, không chuyên tâm nên người học nhiều mà nguồn nhân lực vẫn thiếu. " },
          { id: "5", text: "Vậy nên các bạn đang học hãy cố gắng lên nhé, đừng thấy khó mà nản, hãy quyết tâm và lựa chọn phương pháp đúng nhé" },
          { id: "6", text: "Có rất nhiều cơ hội tốt mở ra khi chinh phục thành công tiếng Nhật đấy." },
        ]
      },
      {
        id: "2", title: "Hệ thống chữ viết", content: 'Đọc bài', lession: [
          { id: "1", text: "Hiragana あ い う え お", uri: require('../assert/hiragana/hiragana.png') },
          { id: "2", text: "Với các nét chữ mềm mại, đây là những chữ thể hiện những từ thuần nhật,  có khoảng 50 ký tự, và được sử dụng nhiều nhất. " },
          { id: "3", text: "Katakana ア イ ウ エ オ", uri: require('../assert/hiragana/katakana.jpg') },
          { id: "4", text: "Với những nét chữ cứng hơn, thường được dùng để thể hiện những từ vay mượn từ nước ngoài, ví dụ từ takushi (vay mượn từ taxi), kurasu (class), cách đọc giống hệt chữ hiragana. " },
          { id: "5", text: "Kanji  一 二 三", uri: require('../assert/hiragana/kanji.jpg') },
          { id: "6", text: "Là những chữ Hán được vay mượn từ hệ thống chữ viết của Trung Quốc, được sử dụng nhiều trong tiếng Nhật." },
          { id: "7", text: "Romaji a i u e o", uri: require('../assert/hiragana/romaji.jpg') },
          { id: "8", text: "Là những chữ la tinh, được dùng để phiên âm quốc tế cho tiếng Nhật theo ký tự abc, các ký tự này ban đầu sử dụng khá thuận lợi cho người học đặc biệt là người mới bắt đầu tự học tiếng Nhật. Tuy nhiên ở trình độ cao hơn sẽ thích dùng Kanji hơn." },
        ]
      },
      {
        id: "3", title: "Các cấp độ", content: 'Đọc bài', lession: [
          { id: "1", text: "Theo thang chuẩn mực nhất tiếng Nhật có 5 cấp độ từ N5 cho đến N1," },
          { id: "2", text: "N5 là cấp độ thất và N1 là cao nhất" },
          { id: "3", text: "1.Trình độ tiếng Nhật N5" },
          { id: "4", text: "Có thể hiểu ở mức nào đó tiếng Nhật căn bản." },
          { id: "5", text: "Có thể đọc hiểu cụm từ, câu, đoạn văn dạng cố định viết bằng chữ hiragana, chữ katakana, chữ hán cơ bản dùng trong sinh hoạt hàng ngày." },
          { id: "6", text: "Có thể nghe được thông tin cần thiết trong hội thoại ngắn, nói chậm trong các tình huống hay gặp hàng ngày như lớp học, cuộc sống xung quanh." },
          { id: "7", text: "2.Trình độ tiếng Nhật N4" },
          { id: "8", text: "Có thể hiểu tiếng Nhật căn bản" },
          { id: "9", text: "Có thể đọc hiểu văn chương hay dùng hàng ngày viết bằng những từ vựng và chữ kanji cơ bản." },
          { id: "10", text: "Có thể hiểu nội dung hội thoại trong tình huống hàng ngày nếu nói chậm." },
          { id: "11", text: "3. Với trình độ tiếng Nhật N3" },
          { id: "12", text: "Có thể hiểu ở mức nhất định tiếng Nhật dùng trong các tình huống hàng ngày." },
          { id: "14", text: "Có thể đọc hiểu văn chương diễn đạt nội dung cụ thể về các vấn đề hàng ngày." },
          { id: "15", text: "Có thể nắm bắt khái quát thông tin từ tiêu đề báo chí" },
          { id: "16", text: "Có thể hiểu văn chương hơi khó trong phạm vi nhìn thấy trong các tình huống hàng ngày nếu được nói diễn đạt lại theo cách khác" },
          { id: "17", text: "Có thể hiểu nội dung cụ thể của câu chuyện cũng như quan hệ các nhân vật khi nghe hội thoại có chủ đề trong nói chuyện tự nhiên hàng ngày." },
          { id: "18", text: "2. Với trình độ tiếng Nhật N2" },
          { id: "19", text: "Hiểu tiếng Nhật trong các tình huống hàng ngày, thêm vào đó có thể hiểu ở mức nào đó tiếng Nhật trong các tính huống đa dạng." },
          { id: "21", text: "Có thể đọc đoạn văn có chủ đề rõ ràng, hiểu nội dung như các bài báo, bài tạp chí, bài giải nghĩa, bình luận đơn giản… về các chủ đề đa dạng" },
          { id: "22", text: "Có thể đọc các bài viết về các chủ đề chung, hiểu dòng chảy câu chuyện và ý đồ diễn đạt." },
          { id: "23", text: "Có thể nghe các tình huống thường ngày và các bài nói tự nhiên trong các tình huống đa dạng như hội thoại, tin tức, hiểu dòng chảy câu chuyện, nội dung, quan hệ giứa các nhân vật, nắm được ý chính." },
          { id: "24", text: "1. Trình độ tiếng Nhật N1" },
          { id: "25", text: "Với trình độ tiếng Nhật N1 bạn có thể hiểu tiếng Nhật trong các tình huống đa dạng" },
          { id: "26", text: "Có thể đọc bình luận báo chí viết về các đề tài đa dạng, đọc văn viết hơi phức tạp về mặt lý luận, văn viết có độ trừu tượng cao và hiểu cấu trúc cũng như nội dung bài văn" },
          { id: "27", text: "Có thể đọc các bài có nội dung sâu về nhiều chủ đề, hiểu dòng chảy câu chuyện và ý đồ diễn đạt." },
          { id: "28", text: "Có thể hiểu chi tiết dòng chảy câu chuyện, nội dung câu chuyện quan hệ giữa các nhân vật và cấu trúc lý luận của nội dung khi nghe các bài nói như hội thoại, tin tức, bài giảng ở các tình huống đa dạng." },

        ]
      },
    ],

  },
  {
    id: 7,
    saved: true,
    title: 'Hiragana',
    description: 'Hiragana ひらがな được sử dụng phiên âm những chữ Hán tự, là hệ thống chữ mềm (đường cong mềm mại) cơ bản cấu tạo nên tiếng Nhật, dành cho các em mẫu giáo mới bắt đầu tập viết. Chữ Hiragana chiếm một vị trí quan trọng nhất trong việc học tiếng Nhật. Ko thuộc bảng Hiragana thì sẽ không bao giờ học được tiếng Nhật ',
    uri: require('../assert/imgs/hira.png'),
    images: [
      {uri:require('../assert/imgs/hira.png') },
    ],
    data: [
      {
        id: "1", title: "Bài 1", content: 'あ い う え お', lession: [
          { id: "1", text: "Với những bạn mới bắt đầu học tiếng Nhật thì bài học đầu tiên không phải là từ vựng Cũng không phải là ngữ pháp như các ngôn ngữ khác" },
          {
            id: "3", text: 'Mà chính là bảng chữ cái.'
          },
          { id: "4", text: "Có thể bạn sẽ khá buồn cười khi tiếng Nhật vốn là chữ tượng hình nhưng lại chia ra thành 2 bảng chữ cái khác nhau và bạn bắt buộc phải học các bảng chữ cái này." },
          { id: "5", text: "あ", audio: true ,uri: require('../assert/stroke-order/hiragana/a.png')},
          { id: "6", text: "あ được phát âm giống với chữ “a” trong từ “số ba” hay “xa xôi”" },
          { id: "7", text: "Để ghi nhớ chữ cái này, hãy nhìn vào ký tự “A” được lồng trong nó.", uri: require('../assert/hiragana/a.jpg') },
          { id: "8", text: "い", audio: true ,uri: require('../assert/stroke-order/hiragana/i.png') },
          { id: "9", text: "い được phát âm giống với “I” trong từ “chuyến đi”" },
          { id: "10", text: "Để ghi nhớ chữ này, hãy nghĩ đến hình ảnh hai con lươn đặt cạnh nhau. ", uri: require('../assert/hiragana/i.jpg') },
          { id: "11", text: "う", audio: true ,uri: require('../assert/stroke-order/hiragana/u.png') },
          { id: "12", text: "う có cách phát âm giống với “u” trong “thầy tu”" },
          { id: "13", text: "Để ghi nhớ chữ này, bạn hãy nghĩ đến một chữ U nằm ngang", uri: require('../assert/hiragana/u.jpg') },
          { id: "14", text: "え", audio: true ,uri: require('../assert/stroke-order/hiragana/e.png') },
          { id: "15", text: "え được phát âm là “ê”, giống như trong “con bê”" },
          { id: "16", text: "Để ghi nhớ chữ cái này, hãy liên tưởng đến hình ảnh một con chim với lông mào trên đầu.", uri: require('../assert/hiragana/e.png') },
          { id: "17", text: "お", audio: true ,uri: require('../assert/stroke-order/hiragana/o.png') },
          { id: "18", text: "お có cách phát âm giống với “ô” trong “cái ô”" },
          { id: "19", text: "Để nhớ, bạn hãy hình dung có chữ O lồng vào trong", uri: require('../assert/hiragana/o.jpg') },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "21", text: "Ôn qua lại lần nữa nào" },
          { id: "22", text: "あ い う え お" },
          {
            id: "24", quiz: true, question: {
              question: 'Chữ cái đọc là "a" ?',
              answers: [
                { id: "1", text: "あ", correct: true },
                { id: "2", text: "え" },
                { id: "3", text: "い" },
                { id: "4", text: "お" }
              ]
            },
            text: ""
          },
          {
            id: "25", quiz: true, question: {
              question: '"o" đọc là?',
              answers: [
                { id: "1", text: "お", correct: true },
                { id: "2", text: "い" },
                { id: "3", text: "う" },
                { id: "4", text: "あ" }
              ]
            },
            text: ""
          },
          {
            id: "26", quiz: true, question: {
              question: 'Chữ cái nào là "e" ?',
              answers: [
                { id: "1", text: "い" },
                { id: "2", text: "お" },
                { id: "3", text: "え", correct: true },
                { id: "4", text: "う" }
              ]
            },
            text: ""
          },
          {
            id: "27", quiz: true, question: {
              question: 'Chữ cái đọc là "i" ?',
              answers: [
                { id: "1", text: "お" },
                { id: "2", text: "う" },
                { id: "3", text: "あ" },
                { id: "4", text: "い", correct: true }
              ]
            },
            text: ""
          },
          {
            id: "28", quiz: true, question: {
              question: 'Chữ cái đọc là "u" ?',
              answers: [
                { id: "1", text: "お" },
                { id: "2", text: "う", correct: true },
                { id: "3", text: "あ" },
                { id: "4", text: "い" }
              ]
            },
            text: ""
          },
          { id: "29", text: "", quit: true },
        ]
      },
      {
        id: "2", title: "Bài 2", content: 'か き く け こ', lession: [
          { id: "1", text: "Hàng tiếp theo trong bảng chữ cái hiragana là hàng “K”. Các bạn chỉ cần ghép phụ âm “k” với các nguyên âm cơ bản trong tiếng Nhật để tạo thành cách đọc ka-ki-ku-ke-ko. " },
          { id: "2", text: "か", audio: true ,uri: require('../assert/stroke-order/hiragana/ka.png') },
          {
            id: "3", text: 'か là cách ghép giữa “k” với âm “あ”, ta đọc là “ka”'
          },
          { id: "4", text: "Bạn liên tưởng đến một vũ công đang nhảy múa tạo hình chữ か", uri: require('../assert/hiragana/ka.png') },
          { id: "5", text: "き", audio: true ,uri: require('../assert/stroke-order/hiragana/ki.png') },
          { id: "6", text: "き là sự kết hợp của “k” với âm “い”, có cách đọc là “ki”" },
          { id: "7", text: "Chữ き trông giống như chiếc chìa khóa", uri: require('../assert/hiragana/ki.png') },
          { id: "8", text: "く", audio: true ,uri: require('../assert/stroke-order/hiragana/ku.png') },
          { id: "9", text: "く là cách ghép giữa “k” với âm “う”, tạo nên  “ku”" },
          { id: "10", text: "Chữ く trông giống miệng một con chim cu ", uri: require('../assert/hiragana/ku.png') },
          { id: "11", text: "け" , audio: true ,uri: require('../assert/stroke-order/hiragana/ke.png')},
          { id: "12", text: "け là sự kết hợp của “k” với âm “え”, tạo thành “ke”" },
          { id: "13", text: "Chữ け trông giống hình dáng của một cái thùng", uri: require('../assert/hiragana/ke.png') },
          { id: "14", text: "こ", audio: true ,uri: require('../assert/stroke-order/hiragana/ko.png') },
          { id: "15", text: "こ là cách ghép giữa “k” với “お”, tạo thành “ko”" },
          { id: "16", text: "Chữ こ trông giống hình ảnh 2 con sâu đang bò phải không nào . ", uri: require('../assert/hiragana/ko.png') },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "21", text: "Ôn qua lại lần nữa nào" },
          { id: "22", text: "か き く け こ" },

          {
            id: "24", quiz: true, question: {
              question: 'Chữ cái đọc là "ka" ?',
              answers: [
                { id: "1", text: "か", correct: true },
                { id: "2", text: "せ" },
                { id: "3", text: "け" },
                { id: "4", text: "と" }
              ]
            },
            text: ""
          },
          {
            id: "25", quiz: true, question: {
              question: '"ko" đọc là?',
              answers: [
                { id: "1", text: "こ", correct: true },
                { id: "2", text: "き" },
                { id: "3", text: "か" },
                { id: "4", text: "さ" }
              ]
            },
            text: ""
          },
          {
            id: "26", quiz: true, question: {
              question: 'Chữ cái đọc là "ke" ?',
              answers: [
                { id: "1", text: "こ" },
                { id: "2", text: "か" },
                { id: "3", text: "け", correct: true },
                { id: "4", text: "く" }
              ]
            },
            text: ""
          },
          {
            id: "27", quiz: true, question: {
              question: 'Chữ cái đọc là "ki" ?',
              answers: [
                { id: "1", text: "た" },
                { id: "2", text: "こ" },
                { id: "3", text: "け" },
                { id: "4", text: "き", correct: true }
              ]
            },
            text: ""
          },
          {
            id: "28", quiz: true, question: {
              question: 'Chữ cái đọc là "ku" ?',
              answers: [
                { id: "1", text: "か" },
                { id: "2", text: "く", correct: true },
                { id: "3", text: "て" },
                { id: "4", text: "こ" }
              ]
            },
            text: ""
          },
          { id: "29", text: "", quit: true },

        ]
      },
      {
        id: "3", title: "Bài 3", content: 'さ し す せ そ', lession: [
          { id: "1", text: "Tiếp theo là hàng “S - “. Có một trường hợp ngoại lệ trong hàng này. Khi đi với nguyên âm “I”, ta sẽ có cách viết là “shi”, phát âm giống “she” (cô ấy) trong tiếng Anh. Trong hàng này, ta sẽ học các chữ cái sa-shi-su-se-so." },
          { id: "2", text: "さ" , audio: true ,uri: require('../assert/stroke-order/hiragana/sa.png')},
          {
            id: "3", text: 'さ là cách ghép giữa “s” với âm “あ”, ta đọc là “sa”'
          },
          { id: "4", text: "Chữ v trông giống như một bảng chỉ đường bị cong ", uri: require('../assert/hiragana/sa.png') },
          { id: "5", text: "し" , audio: true ,uri: require('../assert/stroke-order/hiragana/shi.png')},
          { id: "6", text: "し là sự kết hợp của “sh” với âm “い”, có cách đọc là “shi”" },
          { id: "7", text: "Chữ し trông giống một chiếc lưỡi câu phải không nào", uri: require('../assert/hiragana/shi.png') },
          { id: "8", text: "す", audio: true ,uri: require('../assert/stroke-order/hiragana/su.png') },
          { id: "9", text: "す là cách ghép giữa “s” với âm “う”, tạo nên  “su”" },
          { id: "10", text: "Chữ す trông giống một chiếc cầu trược uốn lượn", uri: require('../assert/hiragana/su.png') },
          { id: "11", text: "せ", audio: true ,uri: require('../assert/stroke-order/hiragana/se.png') },
          { id: "12", text: "せ là sự kết hợp của “s” với âm “え”, tạo thành “se”" },
          { id: "13", text: "Chữ せ trông giống một cái miệng của yêu tinh", uri: require('../assert/hiragana/se.png') },
          { id: "14", text: "そ", audio: true ,uri: require('../assert/stroke-order/hiragana/so.png') },
          { id: "15", text: "そ là cách ghép giữa “s” với “お”, tạo thành “so”" },
          { id: "16", text: "Chữ そ trông giống một chú chim đang hát", uri: require('../assert/hiragana/so.png') },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "21", text: "Ôn qua lại lần nữa nào" },
          { id: "22", text: "さ し す せ そ" },
          {
            id: "24", quiz: true, question: {
              question: 'Chữ cái đọc là "sa" ?',
              answers: [
                { id: "1", text: "さ", correct: true },
                { id: "2", text: "せ" },
                { id: "3", text: "て" },
                { id: "4", text: "と" }
              ]
            },
            text: ""
          },
          {
            id: "25", quiz: true, question: {
              question: '"so" đọc là?',
              answers: [
                { id: "1", text: "そ", correct: true },
                { id: "2", text: "と" },
                { id: "3", text: "し" },
                { id: "4", text: "さ" }
              ]
            },
            text: ""
          },
          {
            id: "26", quiz: true, question: {
              question: 'Chữ cái đọc là "se" ?',
              answers: [
                { id: "1", text: "た" },
                { id: "2", text: "さ" },
                { id: "3", text: "せ", correct: true },
                { id: "4", text: "と" }
              ]
            },
            text: ""
          },
          {
            id: "27", quiz: true, question: {
              question: 'Chữ cái đọc là "shi" ?',
              answers: [
                { id: "1", text: "た" },
                { id: "2", text: "さ" },
                { id: "3", text: "て" },
                { id: "4", text: "し", correct: true }
              ]
            },
            text: ""
          },
          {
            id: "28", quiz: true, question: {
              question: 'Chữ cái đọc là "su" ?',
              answers: [
                { id: "1", text: "た" },
                { id: "2", text: "す", correct: true },
                { id: "3", text: "て" },
                { id: "4", text: "ち" }
              ]
            },
            text: ""
          },
          { id: "29", text: "", quit: true },
        ]
      },
      {
        id: "4", title: "Bài 4", content: 'た ち つ て と', lession: [
          { id: "1", text: "Đây là hàng thứ tư trong bảng hiragana, hàng “T-“. Trong hàng này, bạn sẽ thấy kỹ thuật ghi nhớ bằng hình ảnh đem lại hiệu quả rõ rệt. Giống với hàng “S-“, hàng “T-“ cũng có các trường hợp đặc biệt ở hai chữ ち(chi) và つ (tsu)." },
          { id: "2", text: "た", audio: true ,uri: require('../assert/stroke-order/hiragana/ta.png') },
          {
            id: "3", text: 'た là cách ghép giữa “t” với âm “あ”, ta đọc là “ta”'
          },
          { id: "4", text: "Chữ た trông giống chữ “ta” trong Tiếng Việt ", uri: require('../assert/hiragana/ta.png') },
          { id: "5", text: "ち", audio: true ,uri: require('../assert/stroke-order/hiragana/chi.png') },
          { id: "6", text: "ち là sự kết hợp của “ch” với âm “い”, có cách đọc là “chi”" },
          { id: "7", text: "Chữ ち trông giống khuôn mặt một người đàn ông nhìn nghiêng", uri: require('../assert/hiragana/chi.png') },
          { id: "8", text: "つ", audio: true ,uri: require('../assert/stroke-order/hiragana/tsu.png') },
          { id: "9", text: "つ là cách ghép giữa “ts” với âm “う”, tạo nên  “tsu”" },
          { id: "10", text: "Chữ つ nhìn trông giống một chiếc lưỡi câu", uri: require('../assert/hiragana/tsu.png') },
          { id: "11", text: "て", audio: true ,uri: require('../assert/stroke-order/hiragana/te.png') },
          { id: "12", text: "て là sự kết hợp của “t” với âm “え”, tạo thành “te”" },
          { id: "13", text: "Chữ て trông giống chữ 'T' trong Tiếng việt phải không nào", uri: require('../assert/hiragana/te.png') },
          { id: "14", text: "と", audio: true ,uri: require('../assert/stroke-order/hiragana/to.png') },
          { id: "15", text: "と là cách ghép giữa “t” với “お”, tạo thành “to”" },
          { id: "16", text: "Ngón chân bị gai đâm tạo ra chữ と  ", uri: require('../assert/hiragana/to.png') },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "21", text: "Ôn qua lại lần nữa nào" },
          { id: "22", text: "た ち つ て と" },
          {
            id: "24", quiz: true, question: {
              question: 'Chữ cái nào là "ta" ?',
              answers: [
                { id: "1", text: "た", correct: true },
                { id: "2", text: "さ" },
                { id: "3", text: "て" },
                { id: "4", text: "と" }
              ]
            },
            text: ""
          },
          {
            id: "25", quiz: true, question: {
              question: '"to" đọc là?',
              answers: [
                { id: "1", text: "そ" },
                { id: "2", text: "と", correct: true },
                { id: "3", text: "し" },
                { id: "4", text: "さ" }
              ]
            },
            text: ""
          },
          {
            id: "23", quiz: true, question: {
              question: 'Chữ cái đọc là "te" ?',
              answers: [
                { id: "1", text: "た" },
                { id: "2", text: "さ" },
                { id: "3", text: "て", correct: true },
                { id: "4", text: "と" }
              ]
            },
            text: ""
          },
          {
            id: "26", quiz: true, question: {
              question: 'Chữ cái đọc là "chi" ?',
              answers: [
                { id: "1", text: "た" },
                { id: "2", text: "さ" },
                { id: "3", text: "て" },
                { id: "4", text: "ち", correct: true }
              ]
            },
            text: ""
          },
          {
            id: "27", quiz: true, question: {
              question: 'Chữ cái đọc là "tsu" ?',
              answers: [
                { id: "1", text: "た" },
                { id: "2", text: "つ", correct: true },
                { id: "3", text: "て" },
                { id: "4", text: "ち" }
              ]
            },
            text: ""
          },
          { id: "28", text: "", quit: true },
        ]
      },
      {
        id: "5", title: "Bài 5", content: 'な に ぬ ね の', lession: [
          { id: "1", text: "Đây là hàng thứ 5 trong bảng hiragana, hàng “N-“. " },
          { id: "2", text: "な ", audio: true ,uri: require('../assert/stroke-order/hiragana/na.png') },
          {
            id: "3", text: 'な là cách ghép giữa “n” với âm “あ”, ta đọc là “na”'
          },
          { id: "4", text: "Chữ な trông giống một nữ tu đang cầu nguyện đấy ", uri: require('../assert/hiragana/na.png') },
          { id: "5", text: "に", audio: true ,uri: require('../assert/stroke-order/hiragana/ni.png') },
          { id: "6", text: "に là sự kết hợp của “n” với âm “い”, có cách đọc là “ni”" },
          { id: "7", text: "Chữ に trông cây kim và sợi chỉ", uri: require('../assert/hiragana/ni.png') },
          { id: "8", text: "ぬ" , audio: true ,uri: require('../assert/stroke-order/hiragana/nu.png')},
          { id: "9", text: "ぬ là cách ghép giữa “n” với âm “う”, tạo nên  “nu”" },
          { id: "10", text: "Chữ ぬ nhìn trông giống sợi mỳ", uri: require('../assert/hiragana/nu.png') },
          { id: "11", text: "ね" , audio: true ,uri: require('../assert/stroke-order/hiragana/ne.png')},
          { id: "12", text: "ね là sự kết hợp của “n” với âm “え”, tạo thành “ne”" },
          { id: "13", text: "Chữ ね trông giống chữ một con mèo", uri: require('../assert/hiragana/ne.png') },
          { id: "14", text: "の", audio: true ,uri: require('../assert/stroke-order/hiragana/no.png') },
          { id: "15", text: "の là cách ghép giữa “n” với “お”, tạo thành “no”" },
          { id: "16", text: "Chữ の trông giống cái mũi lợn nhỉ  ", uri: require('../assert/hiragana/no.png') },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "21", text: "Ôn qua lại lần nữa nào" },
          { id: "22", text: "な に ぬ ね の" },
          {
            id: "24", quiz: true, question: {
              question: 'Chữ cái đọc là "na" ?',
              answers: [
                { id: "1", text: "な", correct: true },
                { id: "2", text: "せ" },
                { id: "3", text: "ぬ" },
                { id: "4", text: "の" }
              ]
            },
            text: ""
          },
          {
            id: "25", quiz: true, question: {
              question: '"no" đọc là?',
              answers: [
                { id: "1", text: "の", correct: true },
                { id: "2", text: "に" },
                { id: "3", text: "ぬ" },
                { id: "4", text: "な" }
              ]
            },
            text: ""
          },
          {
            id: "26", quiz: true, question: {
              question: 'Chữ cái đọc là "ne" ?',
              answers: [
                { id: "1", text: "な" },
                { id: "2", text: "ぬ" },
                { id: "3", text: "ね", correct: true },
                { id: "4", text: "の" }
              ]
            },
            text: ""
          },
          {
            id: "27", quiz: true, question: {
              question: 'Chữ cái đọc là "ni" ?',
              answers: [
                { id: "1", text: "た" },
                { id: "2", text: "ね" },
                { id: "3", text: "て" },
                { id: "4", text: "に", correct: true }
              ]
            },
            text: ""
          },
          {
            id: "28", quiz: true, question: {
              question: 'Chữ cái đọc là "nu" ?',
              answers: [
                { id: "1", text: "の" },
                { id: "2", text: "ぬ", correct: true },
                { id: "3", text: "ね" },
                { id: "4", text: "ち" }
              ]
            },
            text: ""
          },
          { id: "29", text: "", quit: true },
        ]
      },
      {
        id: "6", title: "Bài 6", content: 'は ひ ふ へ ほ', lession: [
          { id: "1", text: "Đây là hàng thứ 6 trong bảng hiragana, hàng “H-“. Trong hàng này, bạn sẽ thấy kỹ thuật ghi nhớ bằng hình ảnh đem lại hiệu quả rõ rệt. Giống với hàng “S-“, hàng “H-“ cũng có các trường hợp đặc biệt ở chữ ふ(fu)." },
          { id: "2", text: "は ", audio: true ,uri: require('../assert/stroke-order/hiragana/ha.png') },
          {
            id: "3", text: 'は là cách ghép giữa “h” với âm “あ”, ta đọc là “ha”'
          },
          { id: "4", text: "Chữ は trông giống chữ 'H' “a” đã được lồng vào trong tiếng việt", uri: require('../assert/hiragana/ha.png') },
          { id: "5", text: "ひ ", audio: true ,uri: require('../assert/stroke-order/hiragana/hi.png') },
          { id: "6", text: "ひ là sự kết hợp của “h” với âm “い”, có cách đọc là “hi”" },
          { id: "7", text: "Chữ ひ trông giống hình dáng của một cái mũi", uri: require('../assert/hiragana/hi.png') },
          { id: "8", text: "ふ", audio: true ,uri: require('../assert/stroke-order/hiragana/fu.png') },
          { id: "9", text: "ふ là cách ghép giữa “f/h” với âm “う”, tạo nên  “fu”" },
          { id: "10", text: "Chữ ふ nhìn giỗng một vũ công", uri: require('../assert/hiragana/fu.png') },
          { id: "11", text: "へ" , audio: true ,uri: require('../assert/stroke-order/hiragana/he.png')},
          { id: "12", text: "へ là sự kết hợp của “h” với âm “え”, tạo thành “he”" },
          { id: "13", text: "Chữ へ là hình ngọn núi Phú sĩ đấy", uri: require('../assert/hiragana/he.png') },
          { id: "14", text: "ほ", audio: true ,uri: require('../assert/stroke-order/hiragana/ho.png') },
          { id: "15", text: "ほ là cách ghép giữa “h” với “お”, tạo thành “ho”" },
          { id: "16", text: "Chữ ほ như một người rắn bênh cạnh ống khói nè", uri: require('../assert/hiragana/ho.png') },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "21", text: "Ôn qua lại lần nữa nào" },
          { id: "22", text: "は ひ ふ へ ほ" },
          {
            id: "24", quiz: true, question: {
              question: 'Chữ cái đọc là "ha" ?',
              answers: [
                { id: "1", text: "は", correct: true },
                { id: "2", text: "ふ" },
                { id: "3", text: "て" },
                { id: "4", text: "ほ" }
              ]
            },
            text: ""
          },
          {
            id: "25", quiz: true, question: {
              question: '"fu" đọc là?',
              answers: [
                { id: "1", text: "ふ", correct: true },
                { id: "2", text: "へ" },
                { id: "3", text: "し" },
                { id: "4", text: "は" }
              ]
            },
            text: ""
          },
          {
            id: "26", quiz: true, question: {
              question: 'Chữ cái đọc là "he" ?',
              answers: [
                { id: "1", text: "ひ" },
                { id: "2", text: "さ" },
                { id: "3", text: "へ", correct: true },
                { id: "4", text: "と" }
              ]
            },
            text: ""
          },
          {
            id: "27", quiz: true, question: {
              question: 'Chữ cái đọc là "hi" ?',
              answers: [
                { id: "1", text: "た" },
                { id: "2", text: "ほ" },
                { id: "3", text: "ふ" },
                { id: "4", text: "ひ", correct: true }
              ]
            },
            text: ""
          },
          {
            id: "28", quiz: true, question: {
              question: 'Chữ cái đọc là "ho" ?',
              answers: [
                { id: "1", text: "ふ" },
                { id: "2", text: "ほ", correct: true },
                { id: "3", text: "は" },
                { id: "4", text: "ち" }
              ]
            },
            text: ""
          },
          { id: "29", text: "", quit: true },
        ]
      },
      {
        id: "7", title: "Bài 7", content: 'ま み む め も', lession: [
          { id: "1", text: "Đây là hàng thứ 7 trong bảng hiragana, hàng “M-“." },
          { id: "2", text: "ま", audio: true ,uri: require('../assert/stroke-order/hiragana/ma.png') },
          {
            id: "3", text: 'ま là cách ghép giữa “m” với âm “あ”, ta đọc là “ma”'
          },
          { id: "4", text: "Chữ ま trông giống một con Ma rắn 4 tay ghê", uri: require('../assert/hiragana/ma.png') },
          { id: "5", text: "み", audio: true ,uri: require('../assert/stroke-order/hiragana/mi.png') },
          { id: "6", text: "み là sự kết hợp của “m” với âm “い”, có cách đọc là “mi”" },
          { id: "7", text: "Chữ み trông giống  nết chữ nghệch ngoạc trên giấy", uri: require('../assert/hiragana/mi.png') },
          { id: "8", text: "む", audio: true ,uri: require('../assert/stroke-order/hiragana/mu.png') },
          { id: "9", text: "む là cách ghép giữa “m” với âm “う”, tạo nên  “mu”" },
          { id: "10", text: "Chữ む nhìn giỗng một cob bò", uri: require('../assert/hiragana/mu.png') },
          { id: "11", text: "め", audio: true ,uri: require('../assert/stroke-order/hiragana/me.png') },
          { id: "12", text: "め là sự kết hợp của “m” với âm “え”, tạo thành “me”" },
          { id: "13", text: "Chữ め là biểu tượng của con mắt đấy", uri: require('../assert/hiragana/me.png') },
          { id: "14", text: "も", audio: true ,uri: require('../assert/stroke-order/hiragana/mo.png') },
          { id: "15", text: "も là cách ghép giữa “m” với “お”, tạo thành “mo”" },
          { id: "16", text: "Chữ も là hình lưỡi câu móc 2 con giun", uri: require('../assert/hiragana/mo.png') },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "21", text: "Ôn qua lại lần nữa nào" },
          { id: "22", text: "ま み む め も" },
          {
            id: "24", quiz: true, question: {
              question: 'Chữ cái đọc là "ma" ?',
              answers: [
                { id: "1", text: "ま", correct: true },
                { id: "2", text: "む" },
                { id: "3", text: "も" },
                { id: "4", text: "と" }
              ]
            },
            text: ""
          },
          {
            id: "25", quiz: true, question: {
              question: '"mo" đọc là?',
              answers: [
                { id: "1", text: "も", correct: true },
                { id: "2", text: "み" },
                { id: "3", text: "し" },
                { id: "4", text: "ま" }
              ]
            },
            text: ""
          },
          {
            id: "26", quiz: true, question: {
              question: 'Chữ cái đọc là "me" ?',
              answers: [
                { id: "1", text: "も" },
                { id: "2", text: "ま" },
                { id: "3", text: "め", correct: true },
                { id: "4", text: "と" }
              ]
            },
            text: ""
          },
          {
            id: "27", quiz: true, question: {
              question: 'Chữ cái đọc là "mi" ?',
              answers: [
                { id: "1", text: "た" },
                { id: "2", text: "め" },
                { id: "3", text: "も" },
                { id: "4", text: "み", correct: true }
              ]
            },
            text: ""
          },
          {
            id: "28", quiz: true, question: {
              question: 'Chữ cái đọc là "mu" ?',
              answers: [
                { id: "1", text: "も" },
                { id: "2", text: "む", correct: true },
                { id: "3", text: "て" },
                { id: "4", text: "ま" }
              ]
            },
            text: ""
          },
          { id: "29", text: "", quit: true },
        ]
      },
      {
        id: "8", title: "Bài 8", content: 'や ゆ よ', lession: [
          { id: "1", text: "Điều đặc biệt ở hàng này là chỉ có 3 chữ cái: ya, yu, yo mà không có ye và yi. Thực tế, ye và yi đã từng tồn tại, nhưng bây giờ người Nhật sẽ dùng えvàい thay thế do chúng có cách đọc khá tương tự." },
          { id: "2", text: "や" , audio: true ,uri: require('../assert/stroke-order/hiragana/ya.png')},
          {
            id: "3", text: 'や là cách ghép giữa “y” với âm “あ”, ta đọc là “ya”'
          },
          { id: "4", text: "Chữ や trông giống một con bò có 2 cái sừng", uri: require('../assert/hiragana/ya.png') },
          { id: "5", text: "ゆ" , audio: true ,uri: require('../assert/stroke-order/hiragana/a.png')},
          { id: "6", text: "ゆ là cách ghép giữa “y” với âm “う”, tạo nên  “yu”" },
          { id: "7", text: "Chữ ゆ trông giống một con cá đang bơi", uri: require('../assert/hiragana/yu.png') },
          { id: "8", text: "よ" , audio: true ,uri: require('../assert/stroke-order/hiragana/yo.png')},
          { id: "9", text: "よ là cách ghép giữa “y” với “お”, tạo thành “yo”" },
          { id: "10", text: "Chữ よ nhìn giỗng một câu bé đang dang tay", uri: require('../assert/hiragana/yo.png') },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "21", text: "Ôn qua lại lần nữa nào" },
          { id: "22", text: "や ゆ よ" },
          {
            id: "24", quiz: true, question: {
              question: 'Chữ cái đọc là "ya" ?',
              answers: [
                { id: "1", text: "や", correct: true },
                { id: "2", text: "せ" },
                { id: "3", text: "よ" },
                { id: "4", text: "ゆ" }
              ]
            },
            text: ""
          },
          {
            id: "25", quiz: true, question: {
              question: '"yo" đọc là?',
              answers: [
                { id: "1", text: "よ", correct: true },
                { id: "2", text: "や" },
                { id: "3", text: "し" },
                { id: "4", text: "ゆ" }
              ]
            },
            text: ""
          },
          {
            id: "26", quiz: true, question: {
              question: 'Chữ cái đọc là "yu" ?',
              answers: [
                { id: "1", text: "や" },
                { id: "2", text: "さ" },
                { id: "3", text: "ゆ", correct: true },
                { id: "4", text: "と" }
              ]
            },
            text: ""
          },
          { id: "29", text: "", quit: true },
        ]
      },
      {
        id: "9", title: "Bài 9", content: 'ら り る れ ろ', lession: [
          { id: "1", text: "Đây là hàng thứ 9 trong bảng hiragana" },
          { id: "2", text: "ら", audio: true ,uri: require('../assert/stroke-order/hiragana/ra.png') },
          {
            id: "3", text: 'ら là cách ghép giữa “r” với âm “あ”, ta đọc là “ra”'
          },
          { id: "4", text: "Chữ ら trông giống một người đang xay đĩa nhạc", uri: require('../assert/hiragana/ra.png') },
          { id: "5", text: "り", audio: true ,uri: require('../assert/stroke-order/hiragana/ri.png') },
          { id: "6", text: "り là sự kết hợp của “r” với âm “い”, có cách đọc là “ri”" },
          { id: "7", text: "2 ngọn lúa tạo thành chữ り", uri: require('../assert/hiragana/ri.png') },
          { id: "8", text: "る" , audio: true ,uri: require('../assert/stroke-order/hiragana/ru.png')},
          { id: "9", text: "る là cách ghép giữa “r” với âm “う”, tạo nên  “ru”" },
          { id: "10", text: "Chữ る nhìn giỗng một con đường có nét con dưới cùng", uri: require('../assert/hiragana/ru.png') },
          { id: "11", text: "れ", audio: true ,uri: require('../assert/stroke-order/hiragana/re.png') },
          { id: "12", text: "れ là sự kết hợp của “r” với âm “え”, tạo thành “re”" },
          { id: "13", text: "Chữ れ là hình một người đang ho", uri: require('../assert/hiragana/re.png') },
          { id: "14", text: "ろ" , audio: true ,uri: require('../assert/stroke-order/hiragana/ro.png')},
          { id: "15", text: "ろ là cách ghép giữa “r” với “お”, tạo thành “ro”" },
          { id: "16", text: "Chữ ろ là hình 1 con đường ", uri: require('../assert/hiragana/ro.png') },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "21", text: "Ôn qua lại lần nữa nào" },
          { id: "22", text: "ら り る れ ろ" },
          {
            id: "24", quiz: true, question: {
              question: 'Chữ cái đọc là "ra" ?',
              answers: [
                { id: "1", text: "ら", correct: true },
                { id: "2", text: "せ" },
                { id: "3", text: "る" },
                { id: "4", text: "ろ" }
              ]
            },
            text: ""
          },
          {
            id: "25", quiz: true, question: {
              question: '"ro" đọc là?',
              answers: [
                { id: "1", text: "ろ", correct: true },
                { id: "2", text: "る" },
                { id: "3", text: "ら" },
                { id: "4", text: "さ" }
              ]
            },
            text: ""
          },
          {
            id: "26", quiz: true, question: {
              question: 'Chữ cái đọc là "re" ?',
              answers: [
                { id: "1", text: "る" },
                { id: "2", text: "り" },
                { id: "3", text: "れ", correct: true },
                { id: "4", text: "と" }
              ]
            },
            text: ""
          },
          {
            id: "27", quiz: true, question: {
              question: 'Chữ cái đọc là "ri" ?',
              answers: [
                { id: "1", text: "た" },
                { id: "2", text: "る" },
                { id: "3", text: "て" },
                { id: "4", text: "り", correct: true }
              ]
            },
            text: ""
          },
          {
            id: "28", quiz: true, question: {
              question: 'Chữ cái đọc là "ru" ?',
              answers: [
                { id: "1", text: "れ" },
                { id: "2", text: "る", correct: true },
                { id: "3", text: "て" },
                { id: "4", text: "ろ" }
              ]
            },
            text: ""
          },
          { id: "29", text: "", quit: true },
        ]
      },
      {
        id: "10", title: "Bài 10", content: 'わ を ん', lession: [
          { id: "1", text: "Đây là nhóm cuối cùng trong bảng chữ cái, bao gồm わ, を(phát âm giống お nhưng chỉ được dùng làm trợ từ), và ん (là  chữ cái duy nhất chỉ có 1 ký tự là phụ âm)." },
          { id: "2", text: "わ", audio: true ,uri: require('../assert/stroke-order/hiragana/wa.png') },
          {
            id: "3", text: 'わ là cách ghép giữa “w” với âm “あ”, tạo nên  “wa”'
          },
          { id: "4", text: "Chữ わ trông giống một chú ong", uri: require('../assert/hiragana/wa.png') },
          { id: "5", text: "を", audio: true ,uri: require('../assert/stroke-order/hiragana/wo.png') },
          { id: "6", text: "を là sự kết hợp của “w” với âm “お”, tạo thành “wo”" },
          { id: "7", text: "Chữ を trông giống một người đang ăn", uri: require('../assert/hiragana/wo.png') },
          { id: "8", text: "Âm “w” trong chữ cái này được phát âm rất nhẹ, gần như giống với âm câm. Nên ở một mức độ nào đó, bạn có thể phát âm nó giống với お." },
          { id: "9", text: "ん" , audio: true ,uri: require('../assert/stroke-order/hiragana/n.png')},
          { id: "10", text: "ん chỉ có cách đọc là âm “-n”. Đây là chữ cái tiếng Nhật duy nhất chỉ gồm một phụ âm.", uri: require('../assert/hiragana/n.png') },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "21", text: "Ôn qua lại lần nữa nào" },
          { id: "22", text: "わ を ん" },
          {
            id: "24", quiz: true, question: {
              question: 'Chữ cái đọc là "wa" ?',
              answers: [
                { id: "1", text: "わ", correct: true },
                { id: "2", text: "せ" },
                { id: "3", text: "を" },
                { id: "4", text: "と" }
              ]
            },
            text: ""
          },
          {
            id: "25", quiz: true, question: {
              question: '"wo" đọc là?',
              answers: [
                { id: "1", text: "を", correct: true },
                { id: "2", text: "ん" },
                { id: "3", text: "わ" },
                { id: "4", text: "さ" }
              ]
            },
            text: ""
          },
          {
            id: "26", quiz: true, question: {
              question: 'Chữ cái đọc là "n" ?',
              answers: [
                { id: "1", text: "た" },
                { id: "2", text: "わ" },
                { id: "3", text: "ん", correct: true },
                { id: "4", text: "と" }
              ]
            },
            text: ""
          },
          { id: "29", text: "", quit: true },
        ]
      },
      {
        id: "11", title: "Bài 11", content: 'Bản dấu Dakuten', lession: [
          { id: "1", text: "Dakuten sử dụng những chữ cái hiragana bạn đã được học và add thêm một ký hiệu đặc biệt để thay đổi cách phát âm của những chữ cái đó." },
          { id: "2", text: " Ký hiệu này nhìn tương đối giống với dấu ngoặc kép, hay một hình tròn nhỏ" },
          {
            id: "3", text: 'Chỉ có 5 hàng trong bảng chữ cái tiếng Nhật hiragana có thể đi với dakuten.'
          },
          { id: "4", text: "か　→　が" },
          { id: "5", text: "Tất cả các chữ cái thuộc hàng か đều có thể đi cùng dấu ‘’ để biến âm “K-“ trở thành âm “G-“." },
          { id: "6", text: "さ　→　ざ" },
          { id: "7", text: "Khi chữ thuộc hàng  さ đi với dấu '’, có sẽ chuyển sang âm “Z-“. Ngoại trừ chữ し, khi đi với ‘’ nó sẽ chuyển thành “JI”." },
          { id: "8", text: "た　→　だ" },
          { id: "9", text: "Với Dakuten, các chữ thuộc hàng た sẽ chuyển từ âm “T-“ sang âm “D-“, trừ 2 chữ cái là ち và つ." },
          { id: "10", text: "ち và つ khi thêm ‘’ sẽ có cách phát âm gần giống với じ và ず, chứ không phải giống hệt. Để cụ thể hơn, cách phát âm của 2 chữ này sẽ là sự kết hợp của âm D- và Z- (dzu và dzi)." },
          { id: "81", text: "は　→　ば, ぱ" },
          { id: "91", text: "Điểm đặc biệt ở hàng は là nó có thể đi cùng cả 2 loại dấu Dakuten – dấu ‘’ và dấu khuyên tròn." },
          { id: "101", text: "Khi dùng ‘’, âm H- sẽ chuyển sang âm B-, còn khi đi với dấu khuyên tròn, ta sẽ được âm P-" },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "23", text: "", quit: true },
        ]
      },
      {
        id: "12", title: "Bài 12", content: 'Kết hợp Hiragana', lession: [
          { id: "1", text: "Ở phần này, bạn sẽ được học cách kết hợp hai kiểu ký tự với nhau để tạo thành âm ghép." },
          { id: "2", text: "Chúng ta tập trung vào cách kết hợp các chữ　ゃゅょ  nhỏ với các chữ có cách đọc thuộc cột い(き、し、じ、に、．．．)." },
          {
            id: "3", text: 'Khi kết hợp những chữ này với nhau, bạn sẽ được một chữ cấu thành từ ký tự đầu tiên của chữ cái thuộc cột い và âm ゃゅょ nhỏ. '
          },
          { id: "4", text: "き + ゃ → kiya → kya" },
          { id: "5", text: "じ + ょ → jiyo → jyo" },
          { id: "6", text: "Chúng ta không có âm いゃcũng như không có sự kết hợp nào của những chữ cái thuộc hàng Y, vì chữ cái đầu tiên trong một âm ghép phải bao hàm một phụ âm “cứng”." },
          { id: "7", text: "きゃ、きゅ、きょ\nぎゃ、ぎゅ、ぎょ" },
          { id: "8", text: "しゃ、しゅ、しょ\nじゃ、じゅ、じょ" },
          { id: "9", text: "ちゃ、ちゅ、ちょ\nぢゃ、ぢゅ、ぢょ " },
          { id: "10", text: "にゃ、にゅ、にょ" },
          { id: "81", text: "ひゃ、ひゅ、ひょ\nびゃ、びゅ、びょ\nぴゃ、ぴゅ、ぴょ" },
          { id: "91", text: "みゃ。みゅ、みょ" },
          { id: "101", text: "Kりゃ、りゅ、りょ" },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "23", text: "", quit: true },
        ]
      },
      {
        id: "13", title: "Bài 13", content: 'Chữ つ nhỏ (っ)', lession: [
          { id: "1", text: "Để đơn giản, hãy coi っ là một cách để “nhân đôi phụ âm”. " },
          { id: "2", text: "Có nghĩa là, mỗi phụ âm đứng sau nó sẽ được nhân đôi lên. Vì vậy, ta sẽ không đặt っ trước các nguyên âm あいうえお." },
          {
            id: "3", text: 'したい → shitai\nしったい → shittai'
          },
          { id: "4", text: "Chúng ta chỉ cần nhân đôi phu âm phía sau và ghép phụ âm được nhân đôi vào chữ cái đằng trước, tạo nên âm ngắt" },
          { id: "5", text: "Như vậy, Khi có っ, ta sẽ có một khoảng dừng rất ngắn trước nó và nhân đôi phụ âm đứng sau." },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "23", text: "", quit: true },
        ]
      },
    ],
  },
  {
    id: 8,
    saved: true,
    title: 'Katakana',
    description: 'Katakana カタカナ được phiên âm những từ tiếng nước ngoài, là hệ thỗng chữ nét cứng (viết nét rất nhọn) thường để phiên âm những từ vay mượn từ tiếng Anh, tên người nước ngoài và rất hay sử dụng trong đời sống, hay kết hợp với chữ Kanji để tạo nên nghĩa. Cũng như Hiragana, số lượng chữ Katakana bạn gặp trong tiếng Nhật không phải là ít, nên nhất định phải học thuộc cả 2 bảng chữ cái này',
    uri: require('../assert/imgs/kara.png'),
    images: [
      {uri:require('../assert/imgs/kara.png') },
    ],
    data: [
      {
        id: "1", title: "Bài 1", content: 'ア イ ウ エ オ', lession: [
          { id: "1", text: "Với những bạn mới bắt đầu học tiếng Nhật thì bài học đầu tiên không phải là từ vựng" },
          { id: "2", text: "cũng không phải là ngữ pháp như các ngôn ngữ khác " },
          {
            id: "3", text: 'mà chính là bảng chữ cái.'
          },
          { id: "4", text: "Có thể bạn sẽ khá buồn cười khi tiếng Nhật vốn là chữ tượng hình nhưng lại chia ra thành 2 bảng chữ cái khác nhau và bạn bắt buộc phải học các bảng chữ cái này." },
          { id: "5", text: "ア", audio: true ,uri: require('../assert/stroke-order/katakana/a.png') },
          { id: "6", text: "ア được phát âm giống với chữ “a” trong từ “số ba” hay “xa xôi”" },
          { id: "7", text: "Để ghi nhớ chữ cái này, hãy nhìn vào ký tự “A” được lồng trong nó.", uri: require('../assert/katakana/a.png') },
          { id: "8", text: "イ", audio: true ,uri: require('../assert/stroke-order/katakana/i.png')  },
          { id: "9", text: "イ được phát âm giống với “I” trong từ “chuyến đi”" },
          { id: "10", text: "Để ghi nhớ chữ này, hãy nghĩ đến hình ảnh một chú chim đang đứng trên đất ", uri: require('../assert/katakana/i.png') },
          { id: "11", text: "ウ", audio: true ,uri: require('../assert/stroke-order/katakana/u.png')  },
          { id: "12", text: "ウ có cách phát âm giống với “u” trong “thầy tu”" },
          { id: "13", text: "Để ghi nhớ chữ này, bạn hãy nghĩ đến một chữ U bên trong", uri: require('../assert/katakana/u.png') },
          { id: "14", text: "え", audio: true ,uri: require('../assert/stroke-order/katakana/e.png')  },
          { id: "15", text: "え được phát âm là “ê”, giống như trong “con bê”" },
          { id: "16", text: "Để ghi nhớ chữ cái này,hãy liên tưởng đến 3  thanh sắt ghép lại", uri: require('../assert/katakana/e.png') },
          { id: "17", text: "オ", audio: true ,uri: require('../assert/stroke-order/katakana/o.png')  },
          { id: "18", text: "オ có cách phát âm giống với “ô” trong “cái ô”" },
          { id: "19", text: "Để nhớ, bạn hãy hình dùng một người trần truồn trong gió", uri: require('../assert/katakana/o.png') },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "21", text: "Ôn qua lại lần nữa nào" },
          { id: "22", text: "ア イ ウ エ オ" },
          {
            id: "24", quiz: true, question: {
              question: 'Chữ cái đọc là "a" ?',
              answers: [
                { id: "1", text: "ア", correct: true },
                { id: "2", text: "ウ" },
                { id: "3", text: "オ" },
                { id: "4", text: "お" }
              ]
            },
            text: ""
          },
          {
            id: "25", quiz: true, question: {
              question: '"o" đọc là?',
              answers: [
                { id: "1", text: "オ", correct: true },
                { id: "2", text: "イ" },
                { id: "3", text: "ア" },
                { id: "4", text: "エ" }
              ]
            },
            text: ""
          },
          {
            id: "26", quiz: true, question: {
              question: 'Chữ cái nào là "e" ?',
              answers: [
                { id: "1", text: "イ" },
                { id: "2", text: "ウ" },
                { id: "3", text: "エ", correct: true },
                { id: "4", text: "ア" }
              ]
            },
            text: ""
          },
          {
            id: "27", quiz: true, question: {
              question: 'Chữ cái đọc là "i" ?',
              answers: [
                { id: "1", text: "オ" },
                { id: "2", text: "ア" },
                { id: "3", text: "ウ" },
                { id: "4", text: "イ", correct: true }
              ]
            },
            text: ""
          },
          {
            id: "28", quiz: true, question: {
              question: 'Chữ cái đọc là "u" ?',
              answers: [
                { id: "1", text: "イお" },
                { id: "2", text: "ウ", correct: true },
                { id: "3", text: "ア" },
                { id: "4", text: "オ" }
              ]
            },
            text: ""
          },
          { id: "29", text: "", quit: true },
        ]
      },
      {
        id: "2", title: "Bài 2", content: 'カ キ ク ケ コ', lession: [
          { id: "1", text: "Hàng tiếp theo trong bảng chữ cái hiragana là hàng “K”. Các bạn chỉ cần ghép phụ âm “k” với các nguyên âm cơ bản trong tiếng Nhật để tạo thành cách đọc ka-ki-ku-ke-ko. " },
          { id: "2", text: "カ", audio: true ,uri: require('../assert/stroke-order/katakana/ka.png')  },
          {
            id: "3", text: 'カ là cách ghép giữa “k” với âm “あ”, ta đọc là “ka”'
          },
          { id: "4", text: "Bạn liên tưởng đến hình chữ か ẩn bên trong", uri: require('../assert/katakana/ka.png') },
          { id: "5", text: "キ", audio: true ,uri: require('../assert/stroke-order/katakana/ki.png')  },
          { id: "6", text: "キ là sự kết hợp của “k” với âm “い”, có cách đọc là “ki”" },
          { id: "7", text: "Chữ キ trông giống như chiếc chìa khóa", uri: require('../assert/katakana/ki.png') },
          { id: "8", text: "ク", audio: true ,uri: require('../assert/stroke-order/katakana/ku.png')  },
          { id: "9", text: "ク là cách ghép giữa “k” với âm “う”, tạo nên  “ku”" },
          { id: "10", text: "Chữ ク trông giống chiếc mũ dài của đầu bếp ", uri: require('../assert/katakana/ku.png') },
          { id: "11", text: "ケ", audio: true ,uri: require('../assert/stroke-order/katakana/ke.png')  },
          { id: "12", text: "ケ là sự kết hợp của “k” với âm “え”, tạo thành “ke”" },
          { id: "13", text: "Chữ ケ trông giống hình chữ 'K'", uri: require('../assert/katakana/ke.png') },
          { id: "14", text: "コ" , audio: true ,uri: require('../assert/stroke-order/katakana/ko.png') },
          { id: "15", text: "コ là cách ghép giữa “k” với “お”, tạo thành “ko”" },
          { id: "16", text: "Chữ コ trông giống hình 3 cạnh ", uri: require('../assert/katakana/ko.png') },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "21", text: "Ôn qua lại lần nữa nào" },
          { id: "22", text: "カ キ ク ケ コ" },
          {
            id: "24", quiz: true, question: {
              question: 'Chữ cái đọc là "ka" ?',
              answers: [
                { id: "1", text: "カ", correct: true },
                { id: "2", text: "ケ" },
                { id: "3", text: "キ" },
                { id: "4", text: "ク" }
              ]
            },
            text: ""
          },
          {
            id: "25", quiz: true, question: {
              question: '"ko" đọc là?',
              answers: [
                { id: "1", text: "コ", correct: true },
                { id: "2", text: "ク" },
                { id: "3", text: "カ" },
                { id: "4", text: "キ" }
              ]
            },
            text: ""
          },
          {
            id: "26", quiz: true, question: {
              question: 'Chữ cái đọc là "ke" ?',
              answers: [
                { id: "1", text: "コ" },
                { id: "2", text: "ク" },
                { id: "3", text: "ケ", correct: true },
                { id: "4", text: "カ" }
              ]
            },
            text: ""
          },
          {
            id: "27", quiz: true, question: {
              question: 'Chữ cái đọc là "ki" ?',
              answers: [
                { id: "1", text: "コ" },
                { id: "2", text: "ク" },
                { id: "3", text: "カ" },
                { id: "4", text: "キ", correct: true }
              ]
            },
            text: ""
          },
          {
            id: "28", quiz: true, question: {
              question: 'Chữ cái đọc là "ku" ?',
              answers: [
                { id: "1", text: "カ" },
                { id: "2", text: "ク", correct: true },
                { id: "3", text: "キ" },
                { id: "4", text: "コ" }
              ]
            },
            text: ""
          },
          { id: "29", text: "", quit: true },
        ]
      },
      {
        id: "3", title: "Bài 3", content: 'サ シ ス セ ソ', lession: [
          { id: "1", text: "Tiếp theo là hàng “S - “. Có một trường hợp ngoại lệ trong hàng này. Khi đi với nguyên âm “I”, ta sẽ có cách viết là “shi”, phát âm giống “she” (cô ấy) trong tiếng Anh. Trong hàng này, ta sẽ học các chữ cái sa-shi-su-se-so." },
          { id: "2", text: "サ", audio: true ,uri: require('../assert/stroke-order/katakana/sa.png')  },
          {
            id: "3", text: 'サ là cách ghép giữa “s” với âm “あ”, ta đọc là “sa”'
          },
          { id: "4", text: "3 con cá chồng lên nhau tạo ra chữ サ", uri: require('../assert/katakana/sa.png') },
          { id: "5", text: "シ", audio: true ,uri: require('../assert/stroke-order/katakana/shi.png')  },
          { id: "6", text: "シ là sự kết hợp của “sh” với âm “い”, có cách đọc là “shi”" },
          { id: "7", text: "Chữ シ trông giống một khuôn mặc đang cười", uri: require('../assert/katakana/shi.png') },
          { id: "8", text: "ス", audio: true ,uri: require('../assert/stroke-order/katakana/su.png')  },
          { id: "9", text: "ス là cách ghép giữa “s” với âm “う”, tạo nên  “su”" },
          { id: "10", text: "Chữ ス trông giống chiếc móc treo đồ", uri: require('../assert/katakana/su.png') },
          { id: "11", text: "セ" , audio: true ,uri: require('../assert/stroke-order/katakana/se.png') },
          { id: "12", text: "セ là sự kết hợp của “s” với âm “え”, tạo thành “se”" },
          { id: "13", text: "Chữ セ có ẩn chữ せ bên trong", uri: require('../assert/katakana/se.png') },
          { id: "14", text: "ソ", audio: true ,uri: require('../assert/stroke-order/katakana/so.png')  },
          { id: "15", text: "ソ là cách ghép giữa “s” với “お”, tạo thành “so”" },
          { id: "16", text: "Chữ ソ trông giống cây kim và sợi chỉ", uri: require('../assert/katakana/so.png') },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "21", text: "Ôn qua lại lần nữa nào" },
          { id: "22", text: "サ シ ス セ ソ" },
          {
            id: "24", quiz: true, question: {
              question: 'Chữ cái đọc là "sa" ?',
              answers: [
                { id: "1", text: "サ", correct: true },
                { id: "2", text: "シ" },
                { id: "3", text: "ソ" },
                { id: "4", text: "セ" }
              ]
            },
            text: ""
          },
          {
            id: "25", quiz: true, question: {
              question: '"so" đọc là?',
              answers: [
                { id: "1", text: "ソ", correct: true },
                { id: "2", text: "ス" },
                { id: "3", text: "セ" },
                { id: "4", text: "サ" }
              ]
            },
            text: ""
          },
          {
            id: "26", quiz: true, question: {
              question: 'Chữ cái đọc là "se" ?',
              answers: [
                { id: "1", text: "サ" },
                { id: "2", text: "ス" },
                { id: "3", text: "セ", correct: true },
                { id: "4", text: "ソ" }
              ]
            },
            text: ""
          },
          {
            id: "27", quiz: true, question: {
              question: 'Chữ cái đọc là "shi" ?',
              answers: [
                { id: "1", text: "ス" },
                { id: "2", text: "ソ" },
                { id: "3", text: "サ" },
                { id: "4", text: "シ", correct: true }
              ]
            },
            text: ""
          },
          {
            id: "28", quiz: true, question: {
              question: 'Chữ cái đọc là "su" ?',
              answers: [
                { id: "1", text: "サ" },
                { id: "2", text: "ス", correct: true },
                { id: "3", text: "シ" },
                { id: "4", text: "ソ" }
              ]
            },
            text: ""
          },
          { id: "29", text: "", quit: true },
        ]
      },
      {
        id: "4", title: "Bài 4", content: 'タ チ ツ テ ト', lession: [
          { id: "1", text: "Đây là hàng thứ tư trong bảng hiragana, hàng “T-“. Trong hàng này, bạn sẽ thấy kỹ thuật ghi nhớ bằng hình ảnh đem lại hiệu quả rõ rệt. Giống với hàng “S-“, hàng “T-“ cũng có các trường hợp đặc biệt ở hai chữ ち(chi) và つ (tsu)." },
          { id: "2", text: "タ", audio: true ,uri: require('../assert/stroke-order/katakana/ta.png')  },
          {
            id: "3", text: 'タ là cách ghép giữa “t” với âm “あ”, ta đọc là “ta”'
          },
          { id: "4", text: "Chữ タ trông giống hình ngọn sóng ", uri: require('../assert/katakana/ta.png') },
          { id: "5", text: "チ ", audio: true ,uri: require('../assert/stroke-order/katakana/chi.png')  },
          { id: "6", text: "チ là sự kết hợp của “ch” với âm “い”, có cách đọc là “chi”" },
          { id: "7", text: "Chữ チ trông giống một cô gái đang cổ vũ", uri: require('../assert/katakana/chi.png') },
          { id: "8", text: "ツ", audio: true ,uri: require('../assert/stroke-order/katakana/tsu.png')  },
          { id: "9", text: "ツ là cách ghép giữa “ts” với âm “う”, tạo nên  “tsu”" },
          { id: "10", text: "Chữ ツ nhìn trông giống  một sợi chỉ và 2 cây kim", uri: require('../assert/katakana/tsu.png') },
          { id: "11", text: "テ", audio: true ,uri: require('../assert/stroke-order/katakana/te.png')  },
          { id: "12", text: "テ là sự kết hợp của “t” với âm “え”, tạo thành “te”" },
          { id: "13", text: "Chữ テ là cây trụ điện với 2 dây điện nằm ngang", uri: require('../assert/katakana/te.png') },
          { id: "14", text: "ト" , audio: true ,uri: require('../assert/stroke-order/katakana/to.png') },
          { id: "15", text: "ト là cách ghép giữa “t” với “お”, tạo thành “to”" },
          { id: "16", text: "Chữ ト là hình ảnh một bức tượng cổ ", uri: require('../assert/katakana/to.png') },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "21", text: "Ôn qua lại lần nữa nào" },
          { id: "22", text: "タ チ ツ テ ト" },
          {
            id: "24", quiz: true, question: {
              question: 'Chữ cái nào là "ta" ?',
              answers: [
                { id: "1", text: "タ", correct: true },
                { id: "2", text: "ツ" },
                { id: "3", text: "テ" },
                { id: "4", text: "ト" }
              ]
            },
            text: ""
          },
          {
            id: "25", quiz: true, question: {
              question: '"to" đọc là?',
              answers: [
                { id: "1", text: "テ" },
                { id: "2", text: "ト", correct: true },
                { id: "3", text: "ツ" },
                { id: "4", text: "チ" }
              ]
            },
            text: ""
          },
          {
            id: "23", quiz: true, question: {
              question: 'Chữ cái đọc là "te" ?',
              answers: [
                { id: "1", text: "ツ" },
                { id: "2", text: "ト" },
                { id: "3", text: "テ", correct: true },
                { id: "4", text: "タ" }
              ]
            },
            text: ""
          },
          {
            id: "26", quiz: true, question: {
              question: 'Chữ cái đọc là "chi" ?',
              answers: [
                { id: "1", text: "ト" },
                { id: "2", text: "テ" },
                { id: "3", text: "ツ" },
                { id: "4", text: "チ", correct: true }
              ]
            },
            text: ""
          },
          {
            id: "27", quiz: true, question: {
              question: 'Chữ cái đọc là "tsu" ?',
              answers: [
                { id: "1", text: "テ" },
                { id: "2", text: "ツ", correct: true },
                { id: "3", text: "タ" },
                { id: "4", text: "ト" }
              ]
            },
            text: ""
          },
          { id: "28", text: "", quit: true },
        ]
      },
      {
        id: "5", title: "Bài 5", content: 'ナ ニ ヌ ネ ノ', lession: [
          { id: "1", text: "Đây là hàng thứ tư trong bảng hiragana, hàng “T-“. Trong hàng này, bạn sẽ thấy kỹ thuật ghi nhớ bằng hình ảnh đem lại hiệu quả rõ rệt. Giống với hàng “S-“, hàng “T-“ cũng có các trường hợp đặc biệt ở hai chữ ち(chi) và つ (tsu)." },
          { id: "2", text: "ナ", audio: true ,uri: require('../assert/stroke-order/katakana/na.png')  },
          {
            id: "3", text: 'ナ là cách ghép giữa “n” với âm “あ”, ta đọc là “na”'
          },
          { id: "4", text: "Chữ ナ trông giống một chú cá heo có sừng ", uri: require('../assert/katakana/na.png') },
          { id: "5", text: "ニ" , audio: true ,uri: require('../assert/stroke-order/katakana/ni.png') },
          { id: "6", text: "ニ là sự kết hợp của “n” với âm “い”, có cách đọc là “ni”" },
          { id: "7", text: "Chữ ニ trông cây kim nằm ngang", uri: require('../assert/katakana/ni.png') },
          { id: "8", text: "ヌ" , audio: true ,uri: require('../assert/stroke-order/katakana/nu.png') },
          { id: "9", text: "ヌ là cách ghép giữa “n” với âm “う”, tạo nên  “nu”" },
          { id: "10", text: "Chữ ヌ nhìn trông giống sợi mỳ đang được gắp lên", uri: require('../assert/katakana/nu.png') },
          { id: "11", text: "ネ", audio: true ,uri: require('../assert/stroke-order/katakana/ne.png')  },
          { id: "12", text: "ネ là sự kết hợp của “n” với âm “え”, tạo thành “ne”" },
          { id: "13", text: "Chữ ネ trông giống 1 zombie 3 chân", uri: require('../assert/katakana/ne.png') },
          { id: "14", text: "ノ" , audio: true ,uri: require('../assert/stroke-order/katakana/no.png') },
          { id: "15", text: "ノ là cách ghép giữa “n” với “お”, tạo thành “no”" },
          { id: "16", text: "Chữ ノ trông giống cái mũi dài", uri: require('../assert/katakana/no.png') },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "21", text: "Ôn qua lại lần nữa nào" },
          { id: "22", text: "ナ ニ ヌ ネ ノ" },
          {
            id: "24", quiz: true, question: {
              question: 'Chữ cái đọc là "na" ?',
              answers: [
                { id: "1", text: "ナ", correct: true },
                { id: "2", text: "ネ" },
                { id: "3", text: "ニ" },
                { id: "4", text: "ノ" }
              ]
            },
            text: ""
          },
          {
            id: "25", quiz: true, question: {
              question: '"no" đọc là?',
              answers: [
                { id: "1", text: "ノ", correct: true },
                { id: "2", text: "ヌ" },
                { id: "3", text: "ネ" },
                { id: "4", text: "ナ" }
              ]
            },
            text: ""
          },
          {
            id: "26", quiz: true, question: {
              question: 'Chữ cái đọc là "ne" ?',
              answers: [
                { id: "1", text: "ニ" },
                { id: "2", text: "ヌ" },
                { id: "3", text: "ネ", correct: true },
                { id: "4", text: "ナ" }
              ]
            },
            text: ""
          },
          {
            id: "27", quiz: true, question: {
              question: 'Chữ cái đọc là "ni" ?',
              answers: [
                { id: "1", text: "ノ" },
                { id: "2", text: "ネ" },
                { id: "3", text: "ヌ" },
                { id: "4", text: "ニ", correct: true }
              ]
            },
            text: ""
          },
          {
            id: "28", quiz: true, question: {
              question: 'Chữ cái đọc là "nu" ?',
              answers: [
                { id: "1", text: "ネ" },
                { id: "2", text: "ヌ", correct: true },
                { id: "3", text: "ノ" },
                { id: "4", text: "ナ" }
              ]
            },
            text: ""
          },
          { id: "29", text: "", quit: true },
        ]
      },
      {
        id: "6", title: "Bài 6", content: 'ハ ヒ フ ヘ ホ', lession: [
          { id: "1", text: "Đây là hàng thứ 6 trong bảng hiragana, hàng “H-“. Trong hàng này, bạn sẽ thấy kỹ thuật ghi nhớ bằng hình ảnh đem lại hiệu quả rõ rệt. Giống với hàng “S-“, hàng “H-“ cũng có các trường hợp đặc biệt ở chữ ふ(fu)." },
          { id: "2", text: "ハ", audio: true ,uri: require('../assert/stroke-order/katakana/ha.png')  },
          {
            id: "3", text: 'ハ là cách ghép giữa “h” với âm “あ”, ta đọc là “ha”'
          },
          { id: "4", text: "Chữ ハ trông giống hình chiếc nón", uri: require('../assert/katakana/ha.png') },
          { id: "5", text: "ヒ", audio: true ,uri: require('../assert/stroke-order/katakana/hi.png')  },
          { id: "6", text: "ヒ là sự kết hợp của “h” với âm “い”, có cách đọc là “hi”" },
          { id: "7", text: "Chữ ヒ trông giống một người đang ngồi dang tay", uri: require('../assert/katakana/hi.png') },
          { id: "8", text: "フ" , audio: true ,uri: require('../assert/stroke-order/katakana/fu.png') },
          { id: "9", text: "フ là cách ghép giữa “f/h” với âm “う”, tạo nên  “fu”" },
          { id: "10", text: "Chữ フ nhìn giỗng miệng một con cú mèo", uri: require('../assert/katakana/fu.png') },
          { id: "11", text: "ヘ", audio: true ,uri: require('../assert/stroke-order/katakana/he.png')  },
          { id: "12", text: "ヘ là sự kết hợp của “h” với âm “え”, tạo thành “he”" },
          { id: "13", text: "Chữ ヘ là hình ngọn núi Phú sĩ đấy", uri: require('../assert/katakana/he.png') },
          { id: "14", text: "ホ", audio: true ,uri: require('../assert/stroke-order/katakana/ho.png')  },
          { id: "15", text: "ホ là cách ghép giữa “h” với “お”, tạo thành “ho”" },
          { id: "16", text: "Chữ ホ như một cây thập giá phát sáng", uri: require('../assert/katakana/ho.png') },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "21", text: "Ôn qua lại lần nữa nào" },
          { id: "22", text: "ハ ヒ フ ヘ ホ" },
          {
            id: "24", quiz: true, question: {
              question: 'Chữ cái đọc là "ha" ?',
              answers: [
                { id: "1", text: "ハ", correct: true },
                { id: "2", text: "フ" },
                { id: "3", text: "ヘ" },
                { id: "4", text: "ホ" }
              ]
            },
            text: ""
          },
          {
            id: "25", quiz: true, question: {
              question: '"fu" đọc là?',
              answers: [
                { id: "1", text: "フ", correct: true },
                { id: "2", text: "へ" },
                { id: "3", text: "ヒ" },
                { id: "4", text: "ホ" }
              ]
            },
            text: ""
          },
          {
            id: "26", quiz: true, question: {
              question: 'Chữ cái đọc là "he" ?',
              answers: [
                { id: "1", text: "ひ" },
                { id: "2", text: "フ" },
                { id: "3", text: "へ", correct: true },
                { id: "4", text: "と" }
              ]
            },
            text: ""
          },
          {
            id: "27", quiz: true, question: {
              question: 'Chữ cái đọc là "hi" ?',
              answers: [
                { id: "1", text: "ハ" },
                { id: "2", text: "ホ" },
                { id: "3", text: "ふ" },
                { id: "4", text: "ヒ", correct: true }
              ]
            },
            text: ""
          },
          {
            id: "28", quiz: true, question: {
              question: 'Chữ cái đọc là "ho" ?',
              answers: [
                { id: "1", text: "フ" },
                { id: "2", text: "ホ", correct: true },
                { id: "3", text: "ハ" },
                { id: "4", text: "ち" }
              ]
            },
            text: ""
          },
          { id: "29", text: "", quit: true },
        ]
      },
      {
        id: "7", title: "Bài 7", content: 'マ ミ ム メ モ ', lession: [
          { id: "1", text: "Đây là hàng thứ 7 trong bảng hiragana, hàng “H-“. Trong hàng này, bạn sẽ thấy kỹ thuật ghi nhớ bằng hình ảnh đem lại hiệu quả rõ rệt. Giống với hàng “S-“, hàng “H-“ cũng có các trường hợp đặc biệt ở chữ ふ(fu)." },
          { id: "2", text: "マ", audio: true ,uri: require('../assert/stroke-order/katakana/ma.png')  },
          {
            id: "3", text: 'マ là cách ghép giữa “m” với âm “あ”, ta đọc là “ma”'
          },
          { id: "4", text: "Chữ マ trông giống một cây thước đo góc", uri: require('../assert/katakana/ma.png') },
          { id: "5", text: "ミ", audio: true ,uri: require('../assert/stroke-order/katakana/mi.png')  },
          { id: "6", text: "ミ là sự kết hợp của “m” với âm “い”, có cách đọc là “mi”" },
          { id: "7", text: "Chữ ミ trông giống 3 chiếc tên lửa", uri: require('../assert/katakana/mi.png') },
          { id: "8", text: "ム" , audio: true ,uri: require('../assert/stroke-order/katakana/mu.png') },
          { id: "9", text: "ム là cách ghép giữa “m” với âm “う”, tạo nên  “mu”" },
          { id: "10", text: "Chữ ム nhìn giỗng một đống phân ", uri: require('../assert/katakana/mu.png') },
          { id: "11", text: "メ", audio: true ,uri: require('../assert/stroke-order/katakana/me.png')  },
          { id: "12", text: "メ là sự kết hợp của “m” với âm “え”, tạo thành “me”" },
          { id: "13", text: "Chữ メ là biểu tượng của con mắt đấy", uri: require('../assert/katakana/me.png') },
          { id: "14", text: "モ" , audio: true ,uri: require('../assert/stroke-order/katakana/mo.png') },
          { id: "15", text: "モ là cách ghép giữa “m” với “お”, tạo thành “mo”" },
          { id: "16", text: "Chữ モ giống chữ も trong hiragana", uri: require('../assert/katakana/mo.png') },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "21", text: "Ôn qua lại lần nữa nào" },
          { id: "22", text: "マ ミ ム メ モ" },
          {
            id: "24", quiz: true, question: {
              question: 'Chữ cái đọc là "ma" ?',
              answers: [
                { id: "1", text: "マ", correct: true },
                { id: "2", text: "む" },
                { id: "3", text: "ム" },
                { id: "4", text: "と" }
              ]
            },
            text: ""
          },
          {
            id: "25", quiz: true, question: {
              question: '"mo" đọc là?',
              answers: [
                { id: "1", text: "モ", correct: true },
                { id: "2", text: "み" },
                { id: "3", text: "ミ" },
                { id: "4", text: "ま" }
              ]
            },
            text: ""
          },
          {
            id: "26", quiz: true, question: {
              question: 'Chữ cái đọc là "me" ?',
              answers: [
                { id: "1", text: "も" },
                { id: "2", text: "ミ" },
                { id: "3", text: "メ", correct: true },
                { id: "4", text: "と" }
              ]
            },
            text: ""
          },
          {
            id: "27", quiz: true, question: {
              question: 'Chữ cái đọc là "mi" ?',
              answers: [
                { id: "1", text: "た" },
                { id: "2", text: "メ" },
                { id: "3", text: "も" },
                { id: "4", text: "ミ", correct: true }
              ]
            },
            text: ""
          },
          {
            id: "28", quiz: true, question: {
              question: 'Chữ cái đọc là "mu" ?',
              answers: [
                { id: "1", text: "も" },
                { id: "2", text: "ム", correct: true },
                { id: "3", text: "メ" },
                { id: "4", text: "ま" }
              ]
            },
            text: ""
          },
          { id: "29", text: "", quit: true },
        ]
      },
      {
        id: "8", title: "Bài 8", content: 'ヤ ユ ヨ', lession: [
          { id: "1", text: "Điều đặc biệt ở hàng này là chỉ có 3 chữ cái: ya, yu, yo mà không có ye và yi. Thực tế, ye và yi đã từng tồn tại, nhưng bây giờ người Nhật sẽ dùng えvàい thay thế do chúng có cách đọc khá tương tự." },
          { id: "2", text: "ヤ", audio: true ,uri: require('../assert/stroke-order/katakana/ya.png')  },
          {
            id: "3", text: 'ヤ là cách ghép giữa “y” với âm “あ”, ta đọc là “ya”'
          },
          { id: "4", text: "Chữ ヤ trông giống chữ や nhỉ", uri: require('../assert/katakana/ya.png') },
          { id: "5", text: "ユ", audio: true ,uri: require('../assert/stroke-order/katakana/yu.png')  },
          { id: "6", text: "ユ là cách ghép giữa “y” với âm “う”, tạo nên  “yu”" },
          { id: "7", text: "Chữ ユ trông giống một cái móc nhọn", uri: require('../assert/katakana/yu.png') },
          { id: "8", text: "ヨ" , audio: true ,uri: require('../assert/stroke-order/katakana/yo.png') },
          { id: "9", text: "ヨ là cách ghép giữa “y” với “お”, tạo thành “yo”" },
          { id: "10", text: "Chữ ヨ nhìn giỗng cái xô ghê", uri: require('../assert/katakana/yo.png') },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "21", text: "Ôn qua lại lần nữa nào" },
          { id: "22", text: "ヤ ユ ヨ" },
          {
            id: "24", quiz: true, question: {
              question: 'Chữ cái đọc là "ya" ?',
              answers: [
                { id: "1", text: "ヤ", correct: true },
                { id: "2", text: "ヨ" },
                { id: "3", text: "よ" },
                { id: "4", text: "ユ" }
              ]
            },
            text: ""
          },
          {
            id: "25", quiz: true, question: {
              question: '"yo" đọc là?',
              answers: [
                { id: "1", text: "ヨ", correct: true },
                { id: "2", text: "や" },
                { id: "3", text: "ユ" },
                { id: "4", text: "ヤ" }
              ]
            },
            text: ""
          },
          {
            id: "26", quiz: true, question: {
              question: 'Chữ cái đọc là "yu" ?',
              answers: [
                { id: "1", text: "ヤ" },
                { id: "2", text: "ヨ" },
                { id: "3", text: "ユ", correct: true },
                { id: "4", text: "と" }
              ]
            },
            text: ""
          },
          { id: "29", text: "", quit: true },
        ]
      },
      {
        id: "9", title: "Bài 9", content: 'ラ リ ル レ ロ', lession: [
          { id: "1", text: "Đây là hàng thứ 9 trong bảng hiragana" },
          { id: "2", text: "ラ", audio: true ,uri: require('../assert/stroke-order/katakana/ra.png')  },
          {
            id: "3", text: 'ラ là cách ghép giữa “r” với âm “あ”, ta đọc là “ra”'
          },
          { id: "4", text: "Chữ ラ trông giống một chú khủng long đeo kinh", uri: require('../assert/katakana/ra.png') },
          { id: "5", text: "リ" , audio: true ,uri: require('../assert/stroke-order/katakana/ri.png') },
          { id: "6", text: "リ là sự kết hợp của “r” với âm “い”, có cách đọc là “ri”" },
          { id: "7", text: "Chữ リ giống chữ り bên hiragana", uri: require('../assert/katakana/ri.png') },
          { id: "8", text: "ル" , audio: true ,uri: require('../assert/stroke-order/katakana/ru.png') },
          { id: "9", text: "ル là cách ghép giữa “r” với âm “う”, tạo nên  “ru”" },
          { id: "10", text: "Chữ ル nhìn giỗng hai con đường ", uri: require('../assert/katakana/ru.png') },
          { id: "11", text: "レ" , audio: true ,uri: require('../assert/stroke-order/katakana/re.png') },
          { id: "12", text: "レ là sự kết hợp của “r” với âm “え”, tạo thành “re”" },
          { id: "13", text: "Chữ レ là hình mái tóc của cô gái", uri: require('../assert/katakana/re.png') },
          { id: "14", text: "ロ", audio: true ,uri: require('../assert/stroke-order/katakana/ro.png')  },
          { id: "15", text: "ロ là cách ghép giữa “r” với “お”, tạo thành “ro”" },
          { id: "16", text: "Chữ ロ là đường hình vuông", uri: require('../assert/katakana/ro.png') },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "21", text: "Ôn qua lại lần nữa nào" },
          { id: "22", text: "ラ リ ル レ ロ" },
          {
            id: "24", quiz: true, question: {
              question: 'Chữ cái đọc là "ra" ?',
              answers: [
                { id: "1", text: "ラ", correct: true },
                { id: "2", text: "ル" },
                { id: "3", text: "リ" },
                { id: "4", text: "レ" }
              ]
            },
            text: ""
          },
          {
            id: "25", quiz: true, question: {
              question: '"ro" đọc là?',
              answers: [
                { id: "1", text: "ロ", correct: true },
                { id: "2", text: "ル" },
                { id: "3", text: "リ" },
                { id: "4", text: "ラ" }
              ]
            },
            text: ""
          },
          {
            id: "26", quiz: true, question: {
              question: 'Chữ cái đọc là "re" ?',
              answers: [
                { id: "1", text: "ラ" },
                { id: "2", text: "リ" },
                { id: "3", text: "レ", correct: true },
                { id: "4", text: "ル" }
              ]
            },
            text: ""
          },
          {
            id: "27", quiz: true, question: {
              question: 'Chữ cái đọc là "ri" ?',
              answers: [
                { id: "1", text: "ロ" },
                { id: "2", text: "レ" },
                { id: "3", text: "ル" },
                { id: "4", text: "リ", correct: true }
              ]
            },
            text: ""
          },
          {
            id: "28", quiz: true, question: {
              question: 'Chữ cái đọc là "ru" ?',
              answers: [
                { id: "1", text: "レ" },
                { id: "2", text: "ル", correct: true },
                { id: "3", text: "ロ" },
                { id: "4", text: "ラ" }
              ]
            },
            text: ""
          },
          { id: "29", text: "", quit: true },
        ]
      },
      {
        id: "10", title: "Bài 10", content: 'ワ ヲ ン', lession: [
          { id: "1", text: "Đây là nhóm cuối cùng trong bảng chữ cái, bao gồm ワ, ヲ(phát âm giống お nhưng chỉ được dùng làm trợ từ), và ン (là  chữ cái duy nhất chỉ có 1 ký tự là phụ âm)." },
          { id: "2", text: "ワ" , audio: true ,uri: require('../assert/stroke-order/katakana/wa.png') },
          {
            id: "3", text: 'ワ là cách ghép giữa “w” với âm “あ”, tạo nên  “wa”'
          },
          { id: "4", text: "Chữ ワ trông giống dấu hỏi", uri: require('../assert/katakana/wa.png') },
          { id: "5", text: "ヲ", audio: true ,uri: require('../assert/stroke-order/katakana/wo.png')  },
          { id: "6", text: "ヲ là sự kết hợp của “w” với âm “お”, tạo thành “wo”" },
          { id: "7", text: "Chữ ヲ trông giống miệng một con gấu", uri: require('../assert/katakana/wo.png') },
          { id: "8", text: "Âm “w” trong chữ cái này được phát âm rất nhẹ, gần như giống với âm câm. Nên ở một mức độ nào đó, bạn có thể phát âm nó giống với お." },
          { id: "9", text: "ン", audio: true ,uri: require('../assert/stroke-order/katakana/n.png')  },
          { id: "10", text: "ン chỉ có cách đọc là âm “-n”. Đây là chữ cái tiếng Nhật duy nhất chỉ gồm một phụ âm.", uri: require('../assert/katakana/n.png') },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "21", text: "Ôn qua lại lần nữa nào" },
          { id: "22", text: "ワ ヲ ン" },
          {
            id: "24", quiz: true, question: {
              question: 'Chữ cái đọc là "wa" ?',
              answers: [
                { id: "1", text: "ワ", correct: true },
                { id: "2", text: "ン" },
                { id: "3", text: "ヲ" },
                { id: "4", text: "と" }
              ]
            },
            text: ""
          },
          {
            id: "25", quiz: true, question: {
              question: '"wo" đọc là?',
              answers: [
                { id: "1", text: "ヲ", correct: true },
                { id: "2", text: "ン" },
                { id: "3", text: "ワ" },
                { id: "4", text: "さ" }
              ]
            },
            text: ""
          },
          {
            id: "26", quiz: true, question: {
              question: 'Chữ cái đọc là "n" ?',
              answers: [
                { id: "1", text: "ワ" },
                { id: "2", text: "ヲ" },
                { id: "3", text: "ン", correct: true },
                { id: "4", text: "と" }
              ]
            },
            text: ""
          },
          { id: "29", text: "", quit: true },
        ]
      },
      {
        id: "11", title: "Bài 11", content: 'Bản dấu Dakuten', lession: [
          { id: "1", text: "Nếu bạn đã biết về cách thêm dakuten trong hiragana, thì trong katakana cũng y hệt như vậy." },
          { id: "2", text: "カ　→　ガ (GA)\nサ　→　ザ (ZA)\nタ　→　ダ (DA)\nハ　→　バ (BA)\nハ　→　パ (PA)" },
          {
            id: "3", text: 'Nhưng cũng có một số chữ katakana không tuân theo nguyên tắc này'
          },
          { id: "4", text: "ウ　→　ヴ (VU → 'BU')" },
          { id: "5", text: "Thật ra, người Nhật không thể phát âm âm V- một cách chuẩn xác, nên nó sẽ trở thành “bu” chứ không phải là “vu”. Nhưng khi kết hợp với các chữ katakana nhỏ để tạo thành âm ghép, ta sẽ có cách phát âm gần giống với âm V-." },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "23", text: "", quit: true },
        ]
      },
      {
        id: "12", title: "Bài 12", content: 'Kết hợp Katakana', lession: [
          { id: "1", text: "Ở phần này, bạn sẽ được học cách kết hợp hai kiểu ký tự với nhau để tạo thành âm ghép." },
          { id: "2", text: "Giống với hiragana, bạn cũng có thể kết hợp katakana nhỏ với katakana lớn để tạo ra âm mới." },
          { id: "4", text: "キ + ャ → kiya → kya" },
          { id: "7", text: "キャ、キュ、キョ\nギャ、ギュ、ギョ" },
          { id: "8", text: "シャ、シュ、ショ\nジャ、ジュ、ジョ" },
          { id: "9", text: "チャ、チュ、チョ\nヂャ、ヂュ、ヂョ " },
          { id: "10", text: "ニャ、ニュ、ニョ" },
          { id: "81", text: "ヒャ、ヒュ、ヒョ\nビャ、ビュ、ビョ\nピャ、ピュ、ピョ" },
          { id: "91", text: "ミャ、ミュ、ミョ" },
          { id: "101", text: "リャ、リュ、リョ" },
          { id: "102", text: "Trong hiragana, ta sẽ thêm trường âm bằng cách thêm các nguyên âm あいうえお vào phía sau." },
          { id: "103", text: "Trong katakana thì đơn giản hơn nhiều, bạn chỉ cần thêm một ký tự đặc biệt là dấu gạch ngang (－).Khi thấy ký tự này, bạn chỉ cần nhân đôi nguyên âm đứng trước nó:" },
          { id: "104", text: "コ　→　Ko\nコー　→ kou\nベコン　→　becon\nベーコン　→　beecon" },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "23", text: "", quit: true },
        ]
      },
      {
        id: "13", title: "Bài 13", content: 'Chữ ツ nhỏ (ッ)', lession: [
          { id: "1", text: "Để đơn giản, hãy coi ッ là một cách để “nhân đôi phụ âm”. " },
          { id: "2", text: "Có nghĩa là, mỗi phụ âm đứng sau nó sẽ được nhân đôi lên. Vì vậy, ta sẽ không đặt ッ trước các nguyên âm ア イ ウ エ オ." },
          {
            id: "3", text: 'ハト → hato\nハット → hatto'
          },
          { id: "4", text: "Chúng ta chỉ cần nhân đôi phu âm phía sau và ghép phụ âm được nhân đôi vào chữ cái đằng trước, tạo nên âm ngắt" },
          { id: "5", text: "Như vậy, Khi có ッ, ta sẽ có một khoảng dừng rất ngắn trước nó và nhân đôi phụ âm đứng sau." },
          { id: "20", text: "Hết rồi, bảng chữ cái rất quan trọng nên bạn chăm chỉ lên nhé", },
          { id: "23", text: "", quit: true },
        ]
      },
    ],
  },
  {
    id: 1,
    saved: true,
    title: 'N5',
    description: 'N5 tương đương với khả năng hiểu một ít tiếng Nhật cơ bản. Có thể đọc và hiểu các biểu tiêu biểu và câu viết bằng Hiragana, Katakana, và kanji cơ bản. Có thể lắng nghe và thấu hiểu cuộc trò chuyện về chủ đề thường xuyên gặp phải trong các tình huống cuộc sống hàng ngày và trong lớp học, và có thể lấy thông tin cần thiết từ các cuộc trò chuyện ngắn nói chậm rãi.',
    uri: require('../assert/imgs/n5.png'),
    images: [
      {uri:require('../assert/imgs/n5.png') },
    ],
    data: [
      {
        id: "1", title: "Bài 1", lession: [
          {
            id: "1", title: "Cấu trúc khẳng định", data: [
              { id: "1", text: "Chúng ta sẽ bắt đầu cấu trúc cơ bản đầu tiên của tiếng nhật" },
              { id: "2", text: "N　+ です" },
              { id: "3", text: "Danh từ đi cùng です　để cấu thành vị ngữ" },
              { id: "4", text: "です vừa biểu thị phán đoán, khẳng định vừa biểu thị thái độ lịch sự đối với người nghe." },
              { id: "5", text: "がくせいです。 ", translate:"Là học sinh" },
              { id: "6", text: "やまだです。", translate:"Là anh Yamada" },
              { id: "1000", text: "", quit: true },
            ]
          },
          {
            id: "2", title: "Cấu trúc phủ định định", data: [
              { id: "1", text: "N　+ ではありません\nN　+ じゃありません" },
              { id: "2", text: "じゃ　ありません　thường được dùng trong hội thoại hàng ngày. " },
              { id: "3", text: "では　ありません　thường được dùng trong các bài phát biểu hay văn viết." },
              { id: "4", text: "がくせいじゃありません。", translate:"Không phải là học sinh."  },
              { id: "5", text: "やまだじゃありません。", translate:"Không phải là anh Yamada" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "3", title: "Trợ từ は", data: [
              { id: "1", text: "~　は　~" },
              { id: "2", text: "Danh từ trước は  là chủ đề của câu. Dùng để giới thiệu về một đề tài nào đó mà người nói muốn đề cập đến. " },
              { id: "3", text: "は　đọc là wa（わ）" },
              { id: "4", text: "わたしは　がくせいです。", translate:"Tôi là học sinh."  },
              { id: "5", text: "わたしは　がくせいじゃありません。", translate:"Tôi không phải là học sinh."  },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "4", title: "Cấu trúc nghi vấn", data: [
              { id: "1", text: "Câu nghi vấn dùng để hỏi một vấn đề  hay xác nhận một điều gì đó" },
              { id: "2", text: "Câu + か。" },
              { id: "3", text: "Chữ か được đặt ở cuối câu dùng để làm câu nghi vấn" },
              { id: "4", text: " Phần cuối câu nghi vấn được phát âm với giọng cao hơn." },
              { id: "5", text: "あなたは がくせいですか。", translate:"Bạn là học sinh phải không" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "5", title: "Câu hỏi Yes-No", data: [
              { id: "1", text: "Là dạng câu hỏi xác nhận, để xác định thông tin đúng hay là sai." },
              { id: "2", text: "Khi trả lời phải có はい(phải) hoặc là いいえ(không phải)." },
              { id: "3", text: "A: ～は　Nですか。\nB: はい、Nです。\n\tいいえ、Nじゃありません。N1です。" },
              { id: "4", text: "A: やまださんは　がくせいですか。\nB: はい、がくせいです。", translate: "A: Anh Yamada là học sinh phải không。\nB: Vâng, anh ấy là học sinh" },
              { id: "6", text: "A: あなたは　がくせいですか。\nB:  いいえ,がくせいじゃありません ", translate: "A: Bạn là học sinh phải không。\nB: Không, tôi không phải là học sinh" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "6", title: "Câu hỏi lấy thông tin", data: [
              { id: "1", text: "Chúng ta chỉ cần thay vị trí của nội dung bạn muốn hỏi bằng nghi vấn từ." },
              { id: "2", text: "Nghi vấn từ là các từ dùng để hỏi ví dụ như: ai? cái gì? ở đâu? mấy tuổi? bao nhiêu tiền? " },
              { id: "3", text: "Đối với dạng câu hỏi này chúng ta sẽ trả lời trực tiếp mà không có はい hay là いいえ." },
              { id: "4", text: "A: ～は　[Từ để hỏi]ですか。\nB: Nです。" },
              { id: "5", text: "A: あのかたは　どなたですか。\nB: やまださんです。", translate: "A: Người kia là ai vậy。\nB: Là anh Yamada。" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "7", title: "Trợ từ も", data: [
              { id: "1", text: "~　も　~" },
              { id: "2", text: "Ý nghĩa: Cũng ~" },
              { id: "3", text: " Được dùng khi có yếu tố được lặp lại ở câu văn trước. Khi yếu tố lặp lại mất đi thì も cũng mất đi." },
              { id: "4", text: "わたし は 　がくせいじゃありません。はらださん も　がくせいじゃありません ",translate: "Tôi không phải là học sinh. Bạn Harada cũng không phải là học sinh." },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "8", title: "Trợ từ の", data: [
              { id: "1", text: " N1　の　N２" },
              { id: "2", text: "Ý nghĩa: N2 của N1" },
              { id: "3", text: "の dùng để nối 2 danh từ với nhau. Trong đó N 2 là ý chính, N1 dùng để bổ nghĩa cho N2." },
              { id: "4", text: "ふじだいがくの　がくせいです。\n", translate: "Học sinh của trường địa học Fuji" },
              { id: "5", text: "がくせいです。", translate:"Là học sinh" },
              { id: "6", text: "やまだです。", translate: "Là anh Yamada" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "9", title: "Hỏi tuổi", data: [
              { id: "1", text: "A:　やまだせんせいは　おいくつですか。\n B:　やまだせんせいは　よんじゅっさいです。", translate: "A: Thầy Yamada bao nhiêu tuổi. \nB: Thầy Yamada 40 tuổi" },
              { id: "3", text: "~は おいくつですか。\n\t\tなんさい" },
              { id: "4", text: "Ý nghĩa: 	~ bao nhiêu tuổi?" },
              { id: "5", text: "Dùng なんさい hoặc おいくつ để hỏi tuổi. Trong đó おいくつ là cách hỏi tuổi lịch sự." },
              { id: "6", text: "A:　あなたは　なんさいですか。\nB:　にじゅういっさいです。", translate:"A:　Bạn bao nhiêu tuổi。\nB:　20 tuổi"  },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "10", title: "Hỏi ～さん、～ちゃん", data: [
              { id: "1", text: "さん được dùng sau họ hoặc tên người nghe hoặc người ở ngôi thứ 3. Không dùng sau họ hoặc tên của chính mình." },
              { id: "2", text: "Đối với trẻ em thì dùng ちゃん với sắc thái thân mật hơn thay cho さん. Có thể dùng ちゃん cho cả bé trai lẫn bé gái, không phân biệt ちゃん dùng cho bé gái くん dùng cho bé trai như đã học trước đây." },
              { id: "3", text: "あのかたは　やまださんです。", translate: "Kia là ông Yamada." },
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
      {
        id: "2", title: "Bài 2", lession: [
          {
            id: "1", title: "Câu hỏi xác nhận ～は　Nですか", data: [
              { id: "1", text: "A: ～は　Nですか。\nB: 　はい、Nです。\nー　はい、そうです。\nー　いいえ、Nじゃありません。\nー　いいえ、N1です。\nー　いいえ、ちがいます。" },
              { id: "2", text: "Với câu hỏi xác nhận, có thể trả lời はい、そうです thay cho はい、Nです." },
              { id: "3", text: "Trả lời いいえ、ちがいます hoặc いいえ、N1です thay cho いいえ、Nじゃありません." },
              { id: "4", text: "A: これは　しんぶんですか。\nB: はい、そうです。" , translate: "A: Đó là tờ báo phải không。\nB: Vâng, đúng vậy。"},
              { id: "6", text: "A: それは　シャープペンシルですか。\nB: いいえ、ちがいます。" , translate: "A: Kia là cây bút chì phải không。\nB: Không, nhầm rồi。"},
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "2", title: "Câu hỏi lựa chọn ～か、～か", data: [
              { id: "1", text: "A: ～は　N1ですか、N2ですか。\nB: N１です。\n\tN2です。" },
              { id: "2", text: "Đây là dạng câu hỏi lựa chọn N1 hay N2." },
              { id: "3", text: "Đối với dạng câu hỏi này thông thường chúng ta sẽ chọn một trong những ý mà người hỏi đưa ra để trả lời" },
              { id: "4", text: "A: これは　しんぶんですか、ざっしですか。\nB: しんぶんです。" , translate: "A: Đó là tờ báo hay là tạp chí。\nB: Là tờ báo"},
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "3", title: "Cái này, cái đó, cái kia", data: [
              { id: "1", text: " これ\t\tそれ\t\tあれ\nこのN\t\tそのN\t\tあのN", uri: require('../assert/n5/lession2/Ko-So-A-Do.png') },
              { id: "2", text: "これ：cái này\nそれ：cái đó\nあれ：cái kia, kia\nこのN：N này\nそのN：N đó\nあのN：N kia" },
              { id: "3", text: "これ、それ、あれ：Chỉ dùng cho vật." },
              { id: "4", text: "このN、そのN、あのN：Dùng được cho cả người và vật. Luôn đi cùng với một danh từ." },
              { id: "5", text: "これ、このN：Dùng khi vật ở gần người nói." },
              { id: "6", text: "それ、そのN：Dùng khi vật ở xa người nói, gần người nghe." },
              { id: "7", text: "あれ、あのN：Dùng khi vật ở xa cả người nói và người nghe." },
              { id: "8", text: "これは　かさです。" , translate: "Đó là cái dù"},
              { id: "9", text: "あのかたは　やまだせんせいです。" , translate: "\nVị kia là thầy Yamada"},
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "4", title: "Nghi vấn từ なん", data: [
              { id: "1", text: "A:～は　なんの　N1ですか。\nB:～は　N2の　N1です" },
              { id: "2", text: "	N1 về cái gì?\n\nN1 về N2" },
              { id: "3", text: "なんのN1 : dùng để hỏi về tính chất.\nN2 thường là những từ chỉ về tính chất,chủng loại." },
              { id: "4", text: "A:これは　なんの　ほんですか\nB:にほんごの　ほんです。" , translate: "A:Kia là sách về cái gì\nB:Sách về Tiếng nhật。"},
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "5", title: "Nghi vấn từ だれ", data: [
              { id: "1", text: "A:～は　だれの　N1ですか。\nB: ～は　N2の　N1です。" },
              { id: "2", text: "N1 của ai?\nN1 của N2" },
              { id: "3", text: "だれの: dùng để hỏi về sở hữu.\nN2 thường là các từ chỉ người." },
              { id: "4", text: "A:　これは　だれの　ほんですか。B:　わたしの　ほんです。", translate: "A: Đây là sách của ai vậy。\nB: Là sách của tôi" },
              { id: "1000", text: "", quit: true },


            ]
          },
          {
            id: "6", title: "N2の N1 - Lược bỏ N1", data: [
              { id: "1", text: "N2の N1です　có thể lược bỏ N1 khi N1 đã xuất hiện ở phía trước và là danh từ chỉ vật." },
              { id: "2", text: "の chỉ được dùng thay thế cho danh từ chỉ vật chứ không dùng cho danh từ chỉ người." },
              { id: "3", text: "A: あれは　だれの　ほんですか。\nB:　ミラーさんのです。", translate: "A: Đó là quyển sách của ai vậy。\nB: Của Mira" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "7", title: "そうですか", data: [
              { id: "1", text: "Khi người nói tiếp nhận thông tin nào đó và bày tỏ là đã hiểu." },
              { id: "2", text: "Ý nghĩa: Thế à(Vậy à)." },
              { id: "3", text: "Cho dù có か ở cuối câu nhưng không phải là câu hỏi mà là câu cảm thán.\nそうですか phát âm giọng thấp ở cuối câu." },
              { id: "4", text: "\nA:　このかさは　あなたのですか。\nB:　いいえ、ちがいます。さとうさんのです。\nA:　そうですか。", translate: "\nA:　Cây dù kia là của bạn hả。\nB:　Không, nhầm rồi.Của Satou。\nA: Vậy à。" },
              { id: "1000", text: "", quit: true },


            ]
          },
        ]
      },
      {
        id: "3", title: "Bài 3", lession: [
          {
            id: "1", title: " Chỗ này,chỗ đó,chỗ kia", data: [
              { id: "1", text: "ここ：Nơi này, chỗ này\nそこ：Nơi đó, chỗ đó\nあそこ：Nơi kia, chỗ kia\n→どこ：Ở đâu?\nこちら：Đằng này\nそちら：Đằng đó\nあちら：Đằng kia\n→どちら：Ở đâu, ở đằng nào, phía nào?" },
              { id: "2", text: "ここ、そこ、あそこ hay こちら、そちら、あちら：Dùng để chỉ về nơi chốn." },
              { id: "3", text: "こちら、そちら、あちら là cách nói lịch sự của ここ、そこ、あそこ" },
              { id: "4", text: "ここは　かいぎしつです。", translate: "\nĐây là phòng họp" },
              { id: "5", text: "あちらは　びょういんです。", translate: "\nĐằng kia là bệnh viện" },
              { id: "1000", text: "", quit: true },
              
            ]
          },
          {
            id: "2", title: " Chỗ này/chỗ kia/chỗ đó là N(địa điểm) .", data: [
              { id: "1", text: "ここ / そこ / あそこ は N (địa điểm) です" },
              { id: "2", text: "Cách dùng : giới thiệu, chỉ cho ai đó một nơi nào đó" },
              { id: "3", text: "ここは　うけつけ　です。", translate: "\nĐây là bàn tiếp tân" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "3", title: "N ở đâu ?", data: [
              { id: "1", text: "N は　どこ / どちら　ですか。" },
              { id: "2", text: "Nghĩa : N ở đâu ?" },
              { id: "3", text: "[どこ ] , [どちら] đều có nghĩa là ở đâu, nhưng [どちら] lịch sự hơn." },
              { id: "4", text: "N có thể là vật lẫn người hoặc là [ここ], [そこ] ,[あそこ]" },
              { id: "5", text: "– トイレは　どこ / どちら　ですか。", translate: "\nNhà vệ sinh ở đâu ?" },
              { id: "6", text: "– ここは どこ / どちら ですか。", translate: "\nĐây là đâu ?" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "4", title: "N1 đang ở N2(địa điểm)", data: [
              { id: "1", text: "N1 は　N2 (ĐỊA ĐIỂM)　です" },
              { id: "2", text: "cho biết một ai hay một cái gì đang ở đâu" },
              { id: "3", text: "トイレは　あちらです。" , translate: "\nNhà vệ sinh ở đằng kia."},
              { id: "4", text: "N1 là vật, người hay [ここ], [そこ] ,[あそこ]" },
              { id: "5", text: "ミラーさんは　じむしょです。" , translate: "\nAnh Miller ở văn phòng."},
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "5", title: "N1 của/ từ N2", data: [
              { id: "1", text: "N1 là tên một quốc gia hay tên một công ty, N2 là một sản phẩm nào đó." },
              { id: "2", text: "Nói về xuất xứ, nguồn gốc của một sản phẩm hay đồ vật nào đó" },
              { id: "3", text: "N1 の N2" },
              { id: "4", text: "IMCのコンピューターです。" , translate: "\nMáy tinh của công ty IMC."},
              { id: "5", text: "A: これはどこのワインですか？\nB: イタリアのワインです。", translate: "\nA: Đây là rượu nước nào vậy ?\nB: Rượu Ý ạ." },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "6", title: "Anh chị là người nước nào ?", data: [
              { id: "1", text: "お国はどちらですか" },
              { id: "2", text: "Phải sử dụng [どちら] để thể hiện sự lịch sự trong câu nói" },
              { id: "3", text: "お国はどちらですか?\nベトナムです。", translate: "\nAnh chị là người nước nào ?\nViệt Nam." },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "7", title: "Hỏi giá cả", data: [
              { id: "1", text: "～は　いくらですか。" },
              { id: "2", text: "いくら：giá bao nhiêu?" },
              { id: "3", text: "Khi trả lời về giá tiền chúng ta dùng số đếm đi cùng với đơn vị tiền tệ.\nVD: 80.000 đồng : はちまん　ドン" },
              { id: "4", text: "A:　あのてちょうは　いくらですか。\nB:　ごまんドンです。" , translate: "\nA: Cuốn sổ đó giá bao nhiêu?\nB:　5000 VND。"},
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
      {
        id: "4", title: "Bài 4", lession: [
          {
            id: "1", title: " Hỏi giờ, hỏi phút", data: [
              { id: "1", text: "いま(は) なんじ / なんぶん ですか\nNghĩa : Bây giờ là mấy giờ / mấy phút ?" },
              { id: "2", text: "じはん ：Sử dụng khi nói giờ rưỡi.", uri: require('../assert/n5/lession4/jihan.png') },
              { id: "3", text: "いま なんじですか­。\n８じ３０ぷん(8じはん)です。", translate: "\n Bây giờ là mấy giờ?\nBây giờ là 8:30 (8 rưỡi)." },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "2", title: " Ở N bây giờ là mấy giờ ?", data: [
              { id: "1", text: "N(địa điểm) は いま なんじ ですか\nCách dùng : hỏi về thời gian ở một nơi nào đó" },
              { id: "2", text: "ニューヨークは　いまなんじ　ですか　？\nよんじはんです。", translate: "\nỞ New York bây giờ là mấy giờ ?\n4 giờ rưỡi." },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "3", title: "Động từ ます", data: [
              { id: "1", text: "động từ biểu thị thái độ lịch sự với người nghe, thể hiện một hành động ở thì hiện tại hoặc tương lai." },
              { id: "2", text: "まいにち11じにねます。", translate: "\nHàng ngày tôi ngủ lúc 11h" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "4", title: "Chia thì của động từ", data: [
              { id: "1", text: "Hiện tại:\n\tKhẳng định: ます\n\tVD : まいばん べんきょうします\n\tMỗi tối tôi đều học bài" },
              { id: "2", text: "Hiện tại:\n\tPhủ định: ません\n\tVD : あしたべんきょうしません\n\tNgày mai tôi sẽ không học bài" },
              { id: "3", text: "Quá khứ :\n\tKhẳng định : ました\n\tVD : きのうべんきょうしました\n\tHôm qua tôi đã học bài" },
              { id: "4", text: "Quá khứ :\n\tPhủ định: ませんでした\n\tVD : おとといべんきょうしませんでした\n\tNgày kia tôi đã không học bài." },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "5", title: "Làm việc gì đó vào khoảng thời gian nào", data: [
              { id: "1", text: "N (chỉ thời gian) に＋ V ます\nCách dùng: để chỉ thời điểm tiến hành một hành động." },
              { id: "2", text: "わたしは１２じにたべます。", translate: "\nTôi ăn vào lúc 12 giờ." },
              { id: "3", text: "Nếu thời gian không biểu hiện bằng những con số thì không thêm に. Sau danh từ là các thứ trong tuần ta có thể có に hay không đều được." },
              { id: "4", text: "どようびべんきょうしません。" , translate: "\nThứ 7 tôi thường không học bài."},
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "6", title: "Từ ~ đến ~", data: [
              { id: "1", text: "～から～まで" },
              { id: "2", text: "Cách dùng : nói khoảng thời gian, khoảng cách giữa 2 nơi chốn với trợ từ [から] biểu thị điểm bắt đầu của thời gian hay nơi chốn, trợ từ [まで] biểu thị điểm kết thúc của thời gian hay nơi chốn." },
              { id: "3", text: "８じから１１じまでべんきょうします。" , translate: "\nTôi học bài từ 8 giờ đến 11 giờ"},
              { id: "4", text: "2 trợ từ có thể đứng một mình, không cần phải lúc nào cũng đi đôi với nhau." },
              { id: "5", text: "まいにち 7じから8じをよみます。" , translate: "\nHàng ngày, tôi đọc sách từ 7 giờ ."},
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "7", title: "N1 và / với N2", data: [
              { id: "1", text: "N1 と N2\nCách dùng : dùng để nối 2 danh từ" },
              { id: "2", text: "このほんとあのノートはわたしのです。" , translate: "\nQuyển sách này và quyển sổ kia là của tôi."},
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "8", title: "～ね　nhỉ", data: [
              { id: "1", text: "～ね đặt ở cuối câu để truyền đạt cho người nghe tình cảm của mình hoặc kỳ vọng người nghe đồng ý với những gì mình nói" },
              { id: "2", text: "このケーキはおいしいですね。" , translate: "\n Chiếc báng gato này ngon nhỉ."},
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "9", title: "Hỏi số điện thoại", data: [
              { id: "1", text: "なんばん：số mấy?" },
              { id: "2", text: "A:　～は　なんばんですか。\nB:　～は　～です。" },
              { id: "3", text: "Trả lời đọc số điện thoại theo từng số.Trong trường hợp số điện thoại dài, chúng ta sẽ phân tách đọc thành từng cụm bằng cách dùng chữ の." },
              { id: "4", text: "0650-222-123 : ゼロろくごゼロの　にににの　いちにさん" },
              { id: "5", text: "A:　としょかんの　でんわばんごうは　なんばんですか。\n B:　ゼロはちの　ろくななはちの　ななはちきゅうです。\nB:", translate: "\nA: Số điện thoại của thư viện là số mấy?08678789。" },
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
      {
        id: "5", title: "Bài 5", lession: [
          {
            id: "1", title: " Đi/đến/trở về N(địa điểm)", data: [
              { id: "1", text: "N(địa điểm) + へ + いきます / きます / かえります" },
              { id: "2", text: " [へ] trong trường hợp này え được đọc là [え]" },
              { id: "3", text: "Để diễn tả hành động đi / đến / trở về địa điểm nào đó. Khi động từ chỉ sự di chuyển thì trợ từ　「へ」 được dùng sau danh từ chỉ phương hướng hoặc địa điểm." },
              { id: "4", text: "Khi dùng いきます. Chủ thể của hành động đứng (thực tế đứng hoặc tưởng tượng là mình đứng) tại vị trí xuất phát và đi hướng tới (hoặc nghĩ hướng tới) 1 địa điểm khác." },
              { id: "5", text: "Hanoiへ（に）いきます. đi hướng tới (đến) Hà Nội. Người nói đứng tại nơi xuất phát hoặc một nơi trên đường đi và đang hướng tới Hanoi." },
              { id: "6", text: "Khi dùng きます. Chủ thể của hành động đứng (thực tế đứng hoặc tưởng tượng là mình đứng) tại vị trí đích đến (hoặc vị trí thuộc về mình như : nhà mình, trường mình) và nói về việc mình (hoặc người khác) từ 1 điểm khác tới điểm đích (mà mình đang đứng)." },
              { id: "7", text: "ベトナムからきました. Tôi đã tới (đây) từ Việt Nam. Người nói nói đứng tại điểm đích (ví dụ : Nhật Bản) và nói về việc họ đi từ Việt Nam đến. Vì người nói đã đến nên động từ chia ở quá khứ : きました." },
              { id: "8", text: "Khi dùng かえります. Chủ thể  đi trở về 1 điểm nào đó hoặc 1 nơi thuộc về người nói (nhà, đất nước)." },
              { id: "8", text: "ベトナムへ/にかえります" , translate: "\n Trở lại (về) Việt Nam"},
              { id: "8", text: "ながさきへ　いきます。\nブラジルへ　きました。\nくにへ　かえります。" , translate: "\nTôi đi Nagasaki.\nTôi đã đến Brazin.\nTôi về nước."},
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "2", title: "Không đi đâu cả!", data: [
              { id: "1", text: "どこ「へ」も　いきません / いきませんでした" },
              { id: "2", text: "Khi muốn phủ định hoàn toàn đối tượng ( hoặc phạm vi) của từ nghi vấn thì dùng trợ từ　「も」. Trong mẫu câu này thì động từ để ở dạng phủ định." },
              { id: "3", text: "どこ「へ」もいきません。\nなんにもたべません。\nだれもいません。" , translate: "\nTôi không đi đâu cả\nTôi không ăn gì cả.\nKhông có ai."},
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "3", title: "phương tiện gì", data: [
              { id: "1", text: "N(phương tiện giao thông) + で　+ いきます / きます/ かえります" },
              { id: "2", text: "Đi / đến / về bằng phương tiện gì" },
              { id: "3", text: "Trợ từ 「で」biểu thị phương tiện hay cách thức tiến hành một việc gì đó." },
              { id: "4", text: "でんしゃでいきます。\nﾀｸｼｰできました。" , translate: "\nTôi đi bằng tàu điện.\nTôi đã đến bằng taxi."},
              { id: "5", text: "Trong trường hợp đi bộ thì dùng 「あるいて」mà không kèm trợ từ「で」" },
              { id: "6", text: "えきからあるいてかえります", translate: "Tôi đã đi bộ từ ga về" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "4", title: "Làm gì với ai/ con gì", data: [
              { id: "1", text: " N(người/động vật) + と　+ Động từ" },
              { id: "2", text: "dùng trợ từ「と」 để biểu thị một đối tượng nào đó (người hoặc động vật) cùng thực hiện hành động" },
              { id: "3", text: "かぞくとにほんへきました。", translate: "\nTôi đã đến Nhật Bản cùng gia đình." },
              { id: "4", text: "Trong trường hợp thực hiện hành động một mình thì dùng「ひとりで」 .Trong trường hợp này thì không dùng trợ từ「と」" },
              { id: "5", text: "ひとりでとうきょうへいきます。", translate: "\nTôi đi Tokyo một mình." },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "5", title: "Khi nào", data: [
              { id: "1", text: "いつ" },
              { id: "2", text: "Dùng để hỏi thời điểm làm gì hay xảy ra việc gì đó. Đối với 「いつ」　thì không dùng trợ từ 「に」ở sau" },
              { id: "3", text: "いつにほんへきましたか。\n3月25日にきました。" , translate: "Bạn đến Nhật Bản bao giờ?\nTôi đến Nhật vào ngày 25 tháng 3."},
              { id: "4", text: "いつひろしまへいきますか。\nらいしゅういきます。" ,translate: "Bao giờ bạn sẽ đi Hiroshima?\nTuần sau tôi sẽ đi."},
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "6", title: "~đấy,ấy,cơ", data: [
              { id: "1", text: "よ - đặt ở cuối câu để nhấn mạnh một thông tin nào đó mà người nghe chưa biết, hoặc để nhấn mạnh ý kiến hoặc sự phán đoán của người nói đối với người nghe" },
              { id: "2", text: "このでんしゃはこうしえんへいきますか。\nいいえ、いきません。つぎのふつうですよ。", translate: "Tàu điện này có đi đến Koshien không?\nKhông, không đi. Chuyến tàu thường tiếp theo mới đi." },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "7", title: "Thế nhỉ(Vậy nhỉ).", data: [
              { id: "1", text: "そうですね biểu hiện sự đồng ý, đồng cảm đối với điều mà đối phương nói." },
              { id: "2", text: "A:　あしたは　やすみですね。\nB:　あ、そうですね。", translate: "A: Ngày mai là ngày nghỉ nhỉ?\nB:　Aa,vậy nhỉ" },
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
      {
        id: "6", title: "Bài 6", lession: [
          {
            id: "1", title: "Làm việc gì đó có tân ngữ", data: [
              { id: "1", text: "Danh từ + を + Động từ\n\nを phát âm giống お.", uri: require("../assert/n5/lession6/lession6-1.png") },
              { id: "2", text: "Trợ từ [を] được sử dụng để biểu thị tân ngữ trực tiếp của tha động từ" },
              { id: "3", text: "ジュース を 飲(の)みます。", translate: "Tôi uống nước hoa quả." },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "2", title: "Làm việc gì đó", data: [
              { id: "1", text: "Danh từ + を + します" },
              { id: "2", text: "Động từ します dùng được với nhiều danh từ(tân ngữ) khác nhau để thực hiện hành động được nêu ra bởi danh từ" },
              { id: "3", text: "サッカー を します", translate: "Chơi đá bóng" },
              { id: "4", text: "パーティー を します", translate: "Tổ chức tiệc" },
              { id: "5", text: "宿題(しゅくだい) を します", translate: "Làm bài tập" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "3", title: "Cái gì", data: [
              { id: "1", text: "なん & なに đều có nghĩa là “Cái gì”" },
              { id: "2", text: "[なん] đứng trước một từ mà chữ đầu tiên thuộc hàng た, だ, な" },
              { id: "3", text: "それ は なん ですか。", translate: "Đó là cái gì vậy?" },
              { id: "4", text: "Sau [なん] là từ chỉ số lượng" },
              { id: "5", text: "テレサちゃん は なんさいですか。", translate: "Teresa bao nhiêu tuổi?" },
              { id: "6", text: "[なに]  sử dụng trong những trường hợp còn lại." },
              { id: "7", text: "なに を かいますか。", translate: "Bạn sẽ mua gì?" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "4", title: "Làm gì ở đâu", data: [
              { id: "1", text: "Danh từ(địa điểm) + で + Động từ" },
              { id: "2", text: " [で] nêu lên địa điểm nơi hành động diễn ra" },
              { id: "3", text: "えき で しんぶん を かいます。", translate: "Tôi mua báo ở nhà ga." },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "5", title: "Làm việc gì không", data: [
              { id: "1", text: "Động từ + ませんか" },
              { id: "2", text: "Sử dụng khi bạn mời, rủ ai đó cùng làm gì" },
              { id: "3", text: "いっしょに きょうと へ いきませんか。\nええ、いいですね。", translate: "Cùng đi Kyoto không ?\nỪ, hay đấy." },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "6", title: "Cùng làm gi đó nào", data: [
              { id: "1", text: "Động từ + ましょう" },
              { id: "2", text: "Cách dùng : đề nghị người nghe cùng làm gì với người nói" },
              { id: "3", text: "ちょっと　やすみましょう\nいっしょにたべにいきましょ！", translate: "Cùng nghỉ một chút nào\nCùng nhau đi ăn nào" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "7", title: "Vĩ tố お", data: [
              { id: "1", text: " tiền tố [お] được đặt trước những từ liên quan đến người nghe hoặc người khác để thể hiện sự kính trọng." },
              { id: "2", text: "[お］くに: đất nước bạn" },
              { id: "3", text: "[お] cũng được dùng với nhiều từ khác khi người nói thể hiện sự lịch sự." },
              { id: "4", text: "[お］さけ: rượu\n[お］はなみ: ngắm hoa anh đào nở" },
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
      {
        id: "7", title: "Bài 7", lession: [
          {
            id: "1", title: "Làm việc gì bằng cái gì", data: [
              { id: "1", text: "Danh từ(công cụ/phương tiện) + で + Động từ" },
              { id: "2", text: "Cách dùng : trợ từ 「で」 dùng để biểu thị phương tiện hay cách thức tiến hành một việc gì đó" },
              { id: "3", text: "はしでたべます。", translate: "Tôi ăn cơm bằng đũa" },
              { id: "4", text: "にほんごでレポートをかきます。", translate: "Tôi viết báo cáo bằng tiếng Nhật" },
              { id: "1000", text: "", quit: true },


            ]
          },
          {
            id: "2", title: "“Từ/câu” trong tiếng ～ là gì", data: [
              { id: "1", text: "“Từ/câu” は ～ごでなんですか" },
              { id: "2", text: "Cách dùng : dùng để hỏi một từ, một ngữ hoặc một câu được nói như thế nào bằng một ngôn ngữ khác" },
              { id: "3", text: "[ありがとう」 はえいごでなんですか。\n[Thank You」 です。", translate: "[ありがとう」 trong tiếng Anh là gì ?\nLà　”Thank You”" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "3", title: "Cho/tặng ai", data: [
              { id: "1", text: "Danh từ (người) に あげます" },
              { id: "2", text: "Cách dùng : Chúng ta đặt trợ từ 「に」 sau các danh từ này để chỉ ra đối tượng tiếp nhận hành động" },
              { id: "3", text: "やまださんはきむらさんにはなをあげました。", translate: "Ông Yamada tặng hoa cho chị Kimura" },
              { id: "4", text: "イーさんにほんをかしました。", translate: "Tôi cho chị Lee mượn sách" },
              { id: "5", text: "ngoài ra còn có thể sử dụng các động từ khác như [かします], [おしえます], [おくります], [でんわをかけます]" },
              { id: "6", text: "Đối với động từ [おくります], [でんわをかけます] thì đối tượng không chỉ là người mà còn có thể là địa điểm. Trong trường hợp đó, ngoài trợ từ 「に」 chúng ta còn có thể dùng trợ từ [へ」" },
              { id: "7", text: "かいしゃへでんわをかけます。", translate: "Tôi gọi điện thoại đến công ty" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "4", title: " Nhận từ ai", data: [
              { id: "1", text: "Danh từ (người) に もらいます" },
              { id: "2", text: "Cách dùng : Chúng ta đặt trợ từ 「に」 sau các danh từ này để chỉ hành động từ phía người tiếp nhận" },
              { id: "3", text: "きむらさんはやまださんにはなをもらいます。", translate: "Chị Kimura đã nhận hoa từ ông Yamada" },
              { id: "4", text: "カリナさんにCDをかりました。", translate: "Tôi đã mượn địa CD từ chị Karina" },
              { id: "5", text: "ngoài ra còn có thể sử dụng các động từ khác như [かります], [ならいます]" },
              { id: "6", text: "Chúng ta co thể dùng trợ từ 「から」 thay cho 「に, đặc biệt khi đối tác không phải là người mà là một tổ chức nào đó (ví dụ công ty hoặc trường học) thì không dùng 「に」 mà dùng 「から」" },
              { id: "7", text: "ぎんこうからおかねをかりました", translate: "Tôi đã vay tiền từ ngân hàng." },
              { id: "8", text: "Không dùng もらいます để nói người khác đã nhận từ mình một vật gì đó." },
              { id: "1000", text: "", quit: true },


            ]
          },
          {
            id: "5", title: "Đã làm gì rồi", data: [
              { id: "1", text: "もう　Động từ　ました" },
              { id: "2", text: "Cách trả lời :\nはい、もう　Động từ　ました\nVâng, đã làm … rồi\nいいえ、まだです\nVẫn chưa" },
              { id: "3", text: "Nếu trong câu hỏi thì sẽ có nghĩa là Đã làm gì chưa" },
              { id: "4", text: "もうにもつをおくりましたか。\nはい、 「もう」 おくりました\nいいえ、まだです。", translate: "Anh/chị đã gửi đồ chưa?\nRồi, tôi đã gửi rồi\nChưa, tôi chưa gửi" },
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
      {
        id: "8", title: "Bài 8", lession: [
          {
            id: "1", title: "Tính từ", data: [
              { id: "1", text: "Tính từ là những từ biểu thị tính chất, trạng thái, tình cảm… của sự vật, con người." },
              { id: "2", text: "Chúng được sử dụng làm vị ngữ hoặc bổ nghĩa cho danh từ." },
              { id: "3", text: "Dựa trên sự biến đổi của tính từ trong tiếng Nhật mà chúng được chia thành hai loại: tính từ đuôi な và tính từ đuôi い." },
              { id: "4", text: "Tính từ như là đẹp, xấu, cũ, mới, dài, ngắn,..." },

            ]
          },
          {
            id: "2", title: "“Thể khẳng định tính từ", data: [
              { id: "1", text: "[です] được đặt ở cuối câu kết thúc bằng tính từ để thể hiện sự lịch sự của người nói đối với người nghe." },
              { id: "2", text: "Tính từ đuôi [い] giữ nguyên [い], tính từ đuôi [な] bỏ [な] rồi thêm [です] phía sau" },
              { id: "3", text: "ワットせんせい は しんせつ です", translate: "Thầy Watt tốt bụng." },
              { id: "4", text: "ふじさん は たかい です。", translate: "Núi Phú Sĩ cao." },
            ]
          },
          {
            id: "3", title: "Thể phủ định tính từ", data: [
              { id: "1", text: "Tính từ đuôi [な[ bỏ [な] thêm [じゃありません] hoặc [ではありません]" },
              { id: "2", text: "あそこ は しずか じゃ / では ありません。", translate: "Ở kia không yên tĩnh." },
              { id: "3", text: "tính từ đuôi [い] thì bỏ [い] thêm [くないです]" },
              { id: "4", text: "このほん は おもしろくないです。", translate: "Cuốn sách này không hay." },
              { id: "5", text: "おもしろい bỏ い thêm くない trở thành おもしろくない" },
              { id: "6", text: "Dạng phủ định của [いいです] là [よくないです]" },
            ]
          },
          {
            id: "4", title: "Thể nghi vấn tính từ", data: [
              { id: "1", text: "Khi chuyển sang dạng câu hỏi, cũng giống như câu danh từ và câu động từ, ta thêm [か] vào cuối câu tính từ. " },
              { id: "2", text: "Khi trả lời thì dùng tính từ trong câu hỏi để trả lời chứ không dùng [そうです] hay [そうじゃありません]" },
              { id: "3", text: "ペキンは さむいですか。\nはい、さむいです。", translate: "Bắc Kinh có lạnh không?\nCó, có lạnh." },
              { id: "4", text: "びわこ の みず は きれいですか。\nいいえ、きれいじゃありません。", translate: "Nước hồ Biwa có sạch không?\nKhông, không sạch." },


            ]
          },
          {
            id: "5", title: "Bổ nghĩa cho danh từ", data: [
              { id: "1", text: "Tính từ được đặt trước danh từ để bổ nghĩa cho danh từ đó" },
              { id: "2", text: "ワットせんせい は しんせつな せんせいです。", translate: "Thầy Watt là một giáo viên tốt" },
              { id: "3", text: "Tính từ đuôi い giữ nguyên い rồi thêm danh từ vào phía sau" },
              { id: "4", text: "ふじさん は たか)い やまです。", translate: "Núi Phú Sĩ là một ngọn núi cao" },
            ]
          },
          {
            id: "6", title: "とても và あまり", data: [
              { id: "1", text: "[とても] và [あまり] là trạng từ chỉ mức độ. " },
              { id: "2", text: "Chúng được đặt trước tính từ để bổ nghĩa cho tính từ." },
              { id: "3", text: "[とても] Được dùng trong câu khẳng định, nghĩa là “rất”" },
              { id: "4", text: "これ は とても ゆうめいな えいがです。", translate: "Đây là một bộ phim rất nổi tiếng." },
              { id: "5", text: "[あまり] Được dùng trong câu phủ định, mang ý nghĩa là “không ~ lắm”" },
              { id: "6", text: "シャンハイ は あまり さむくないです。", translate: "Thượng Hải không lạnh lắm." },
            ]
          },
          {
            id: "7", title: "Cái gì như thế nào", data: [
              { id: "1", text: "Danh từ + は + どうですか" },
              { id: "2", text: "Cách dùng : để hỏi ấn tượng, ý kiến về một vật, một địa điểm, một người… mà người nghe đã biết, đã đến, hoặc đã gặp" },
              { id: "3", text: "にほん の せいかつ は どうですか。", translate: "Cuộc sống ở Nhật thế nào?" },
            ]
          },
          {
            id: "8", title: "Miêu tả, giải thích", data: [
              { id: "1", text: "Danh từ 1 + は + どんな Danh từ 2 ですか" },
              { id: "2", text: "Cách dùng : khi người nói muốn người nghe miêu tả, giải thích về N1. N2 là một danh từ mang ý nghĩa rộng hơn, bao trùm N1." },
              { id: "3", text: "Từ để hỏi どんな luôn đứng trước danh từ." },
              { id: "3", text: "ならは どんなまちですか。\nふるいまちです。", translate: "Nara là một thành phố như thế nào?\nLà một thành phố cổ" },
            ]
          },
          {
            id: "9", title: "Nhưng", data: [
              { id: "1", text: "Câu 1 が, Câu 2" },
              { id: "2", text: "Cách dùng :dùng để nối 2 câu lại thành 1" },
              { id: "3", text: "にほんのたべものはおいしいですが、たかいです。", translate: "Đồ ăn của Nhật ngon, nhưng mà đắt" },
            ]
          },
          {
            id: "10", title: "Cái nào どれ", data: [
              { id: "1", text: "yêu cầu người nghe lựa chọn hay chỉ ra một vật từ hai hay nhiều vật được đề cập đến." },
              { id: "2", text: "ミラーさんのかさはどれですか。\nあのあおいかさです。", translate: "Ô của anh Miller là cái nào?\nLà cái màu xanh." },
            ]
          },
        ]
      },
      {
        id: "9", title: "Bài 9", lession: [
          {
            id: "1", title: "Có(sở hữu) cái gì", data: [
              { id: "1", text: "Danh từ + が + あります" },
              { id: "2", text: "[あります] chỉ sự sở hữu, dùng với đồ vật, không dùng cho người, động vật" },
              { id: "3", text: "わたしは　あたらしい　かばんが　あります。", translate: "Tôi có cái cặp mới." },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "2", title: "Hiểu cái gì", data: [
              { id: "1", text: "Danh từ + が + わかります" },
              { id: "2", text: "わたしは にほんごがわかります。", translate: "Tôi hiểu tiếng Nhật" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "3", title: "Thích/ ghét/ giỏi/ kém cái gì", data: [
              { id: "1", text: " Danh từ + が + すきです / きらいです/ じょうずです / へたです" },
              { id: "2", text: "わたしのともだちは　ぶたにく が　きらいです。", translate: "Bạn tôi không thích thịt lợn" },
              { id: "3", text: "わたしは　にほんご が　へたです。", translate: "Tôi không giỏi (kém) tiếng Nhật" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "4", title: "どんな + Danh từ", data: [
              { id: "1", text: "Cách dùng : hỏi về tên cụ thể của một vật hay một việc nào đó trong một phạm trù lớn hơn" },
              { id: "2", text: "どんな のみものがすきですか。\nジュースがすきです。", translate: "Bạn thích đồ uống nào?\nTôi thích nước hoa quả" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "5", title: "Các phó từ Mức độ", data: [
              { id: "1", text: "Các phó từ đặt trước động từ/ tính từ để chỉ mức độ (chất) của chúng" },
              { id: "2", text: "よく わかります ->	Hiểu nhiều\nだいたい わかります ->	Hiểu chung chung\nすこし わかります ->	Hiểu một ít\nあまり わかります ->	Không hiểu lắm\nぜんぜん わかります -> Hoàn toàn không hiểu" },
              { id: "3", text: "Các phó từ đặt trước động từ/ tính từ để chỉ mức độ (lượng) của chúng" },
              { id: "4", text: " たくさん あります ->	 Có nhiều\nすこし あります ->	 Có ít\nあまり あります ->	 Không có nhiều lắm\n ぜんぜん あります -> Hoàn toàn không cóVí dụ:" },
              { id: "6", text: "ぶんぽうが あまりわかりません。", translate: "Tôi không biết nhiều ngữ pháp lắm." },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "6", title: " Bởi vì", data: [
              { id: "1", text: "Câu 1, から câu 2" },
              { id: "2", text: "Cách dùng : dùng để nối 2 câu lại. câu 1 biểu thị lý do cho câu 2" },
              { id: "3", text: "じかんがありませんから、ほんをよみません", translate: "Vì không có thời gian nên tôi không đọc sách" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "7", title: "Tại sao", data: [
              { id: "1", text: "どうして" },
              { id: "2", text: "Cách dùng : Dùng để hỏi lý do, và khi trả lời chúng ta thêm [から] vào cuối câu" },
              { id: "3", text: "どうしてきょう は はやく かえりますか ?\nようじがありますから。", translate: "Tại sao hôm nay về sớm thế?\nVì tôi có chút việc." },
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
      {
        id: "10", title: "Bài 10", lession: [
          {
            id: "1", title: "Có, tồn tại", data: [
              { id: "1", text: "Danh từ + が + あります ／ います" },
              { id: "2", text: "[あります] sử dụng khi N là đồ vật" },
              { id: "3", text: "わたしは あたらしいでんわ が あります。", translate: "Tôi có điện thoại mới." },
              { id: "4", text: "[います] sử dụng khi N là người và động vật" },
              { id: "5", text: "いもうとが います。", translate: "Tôi có em gái." },
              { id: "1000", text: "", quit: true },


            ]
          },
          {
            id: "2", title: "Ở đâu có ai/cái gì", data: [
              { id: "1", text: "Danh từ 1(điạ điểm) + に + Danh từ 2 + が + あります／います" },
              { id: "2", text: " Danh từ 1 là đại điểm tồn tại của danh từ 2 và được xác định bằng trợ từ [に]" },
              { id: "3", text: "わたしのへやにつくえがあります。", translate: "Trong phòng tôi có cái bàn" },
              { id: "1000", text: "", quit: true },


            ]
          },
          {
            id: "3", title: "Ở đâu có cái gì hay có ai không", data: [
              { id: "1", text: " Danh từ 1(địa điểm) に + なに/だれ + が ありますか / いますか" },
              { id: "2", text: " Để hỏi có cái gì/ con gì / ai ở một địa điểm cụ thể nào đó" },
              { id: "3", text: "にわに なにが ありますか。\nさくら)のきが あります。", translate: "Ngoài sân có gì thế?\nCó cây hoa anh đào." },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "4", title: " Cái gì/ ai đó ở địa điểm nào đó", data: [
              { id: "1", text: "Danh từ 1 は Danh từ 2(địa điểm) に あります／います" },
              { id: "2", text: "Chỉ nơi tồn tại ở người hay vật" },
              { id: "3", text: "でんわは かばんに あります。", translate: "Điện thoại ở trong cặp." },
              { id: "1000", text: "", quit: true },


            ]
          },
          {
            id: "5", title: "(vật, người, địa điểm) の N2 (vị trí)", data: [
              { id: "1", text: " thể hiện tương quan vị trí như：うえ(trên)、した(dưới)、まえ(trước)、うしろ(sau)、あいだ(trong, giữa)、そと(ngoài)、ひだり(trái)、みぎ(phải)、ちかく(gần)、となり(bên cạnh)" },
              { id: "2", text: "つくえのうえに はなが あります。", translate: "Trên bàn có hoa." },
              { id: "3", text: "こうえんのちかくで ともだちにあいます。", translate: "Tôi gặp bạn ở gần công viên." },
              { id: "1000", text: "", quit: true },


            ]
          },
          {
            id: "6", title: "Nối danh từ", data: [
              { id: "1", text: "Danh từ 1 や Danh từ 2" },
              { id: "2", text: "[や] dùng để nối các danh từ. Khác với [と] dùng để liệt kê toàn bộ, [や] chỉ liệt kê 2 danh từ mang tính chất tượng trưng." },
              { id: "3", text: "つくえの上うえに ほん や ペンが あります。", translate: "Trên bàn có sách, bút,…" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "7", title: "Ở giữa ~ あいだ:", data: [
              { id: "1", text: "～N１とN2の　あいだ～" },
              { id: "2", text: "Cách dùng : Dùng để hỏi lý do, và khi trả lời chúng ta thêm [から] vào cuối câu" },
              { id: "3", text: "わたしのうちは　ほんやと　こうえんの　あいだに　あります。", translate: "Nhà tôi ở giữa nhà sách và công viên" },
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
      {
        id: "11", title: "Bài 11", lession: [
          {
            id: "1", title: "Lượng từ", data: [
              { id: "1", text: "Là những từ được đặt sau số để đếm các đồ vật, người…" },
              { id: "2", text: "ひとつ、ふたつ…とお là số đếm chung cho đồ vật đến 10. Từ 11 sử dụng như đếm số thông thường." },
              { id: "3", text: "1 cái ひとつ\n2 cái ふたつ" },
              { id: "4", text: "人 (にん): dùng đếm người (đặc biệt đếm 1, 2 người dùng ひとり, ふたり)", url: require('../assert/n5/lession11/demnguoi.jpg') },
              { id: "5", text: "番 (ばん): dùng để đếm số thứ tự", uri: require('../assert/n5/lession11/sothutu.jpg') },
              { id: "6", text: "枚 (まい ): dùng để đếm vật mỏng (tem, áo sơmi, …)", uri: require('../assert/n5/lession11/demtem.jpg') },
              { id: "7", text: "台 (だい) : dùng để đếm máy móc, xe", uri: require('../assert/n5/lession11/demxe.jpg') },
              { id: "8", text: "冊 (さつ): dùng để đếm sách vở", uri: require('../assert/n5/lession11/demsachvo.jpg') },
              { id: "9", text: "着 (ちゃく): dùng để đếm quần áo", uri: require('../assert/n5/lession11/demquanao.jpg') },
              { id: "10", text: "個 (こ): dùng để đếm vật nhỏ", uri: require('../assert/n5/lession11/demvatnho.jpg') },
              { id: "11", text: "足(そく): dùng để đếm giầy, tất", uri: require('../assert/n5/lession11/demgiay.jpg') },
              { id: "12", text: "軒 (けん): dùng để đếm nhà", uri: require('../assert/n5/lession11/demnha.jpg') },
              { id: "13", text: "階 (かい、がい): dùng để đếm tầng của một căn nhà", uri: require('../assert/n5/lession11/demtang.jpg') },
              { id: "14", text: "本 (ほん、ぼん、ぽん) : dùng để đếm vật thon dài", uri: require('../assert/n5/lession11/demvatdai.jpg') },
              { id: "15", text: "杯 (はい、ばい、ぱい) : dùng cho đồ uống", uri: require('../assert/n5/lession11/demdouong.jpg') },
              { id: "16", text: "匹 (ひき、びき、ぴき) : dùng đếm con vật kích thước nhỏ", uri: require('../assert/n5/lession11/demvatnho.jpg') },
              { id: "17", text: "回 (かい) dùng đếm số lần" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "2", title: "Cách dùng lượng từ", data: [
              { id: "1", text: "Khi chữ số đi kèm với hậu tố chỉ đơn vị thì được gọi là lượng từ." },
              { id: "2", text: "Lượng từ thường được đặt trước động từ mà nó bổ nghĩa, trừ trường hợp đó là lượng từ chỉ thời gian." },
              { id: "3", text: "りんごを４つかいました。", translate: "Mua 4 quả táo" },
              { id: "4", text: "がいこくじんのがくせいがふたりいます。", translate: "Có 2 sinh viên người nước ngoài" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "3", title: "Cách hỏi lượng từ", data: [
              { id: "1", text: "Đối với những vật được đếm bằng [ひとつ、ふたつ,..], thì ta dùng từ nghi vấn [いくつ] để hỏi" },
              { id: "2", text: "みかんをいくつかいましたか？\n２つかいました。", translate: "Em mua mấy quả quýt vậy ?\n2 ạ!" },
              { id: "3", text: "Đối với các chữ số có hậu tố chỉ đơn vị đi kèm thì ta dùng [なん] + “hậu tố chỉ đơn vị” để hỏi" },
              { id: "4", text: "このかいしゃにがいこくじんがなんにんいますか？\n５にんいます", translate: "Trong công ty này có bao nhiêu người nước ngoài ?\nCó 5 người" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "4", title: " Bao lâu", data: [
              { id: "1", text: "どのくらい" },
              { id: "2", text: "どのくらいにほんごをべんきょうしましたか？", translate: "Bạn học tiếng Nhật bao lâu rồi ?" },
              { id: "3", text: "Cách dùng : dùng để hỏi về khoảng thời gian" },
              { id: "4", text: "Có nhiều cách nói đơn vị thời gian (năm（ねん）, tuần（しゅうかん）, ngày（にち）, giờ（じかん）, phút（ふん/ぶん）,…" },
              { id: "5", text: "３ねんべんきょうました。", translate: "Tôi học được 3 năm rồi" },
              { id: "6", text: "[ぐらい] có thể thêm vào sau lượng từ với nghĩa là “Khoảng”" },
              { id: "7", text: "きょうしつにがくせいが３０にんぐらいいます。", translate: "Trong lớp học có khoảng 30 học sinh" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "5", title: "Số lần", data: [
              { id: "1", text: "Lượng từ(khoảng thời gian) + に +　~かい + Động từ" },
              { id: "2", text: " Biểu thị tần số khi làm một việc gì đó" },
              { id: "3", text: "１かげつに３かいえいがをみます", translate: "1 tháng tôi xem phim 3 lần" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "6", title: "Chỉ ~", data: [
              { id: "1", text: "Lượng từ/ Danh từ + だけ" },
              { id: "2", text: "わたしはやさいだけたべます。", translate: "Tôi chỉ ăn rau quả thôi" },
              { id: "3", text: "Được đặt sau danh từ hay lượng từ để biểu thi ý nghĩa không thể nhiều hơn nữa" },
              { id: "4", text: "[だけ] thay thế cho các trợ từ [を] và [が]" },
              { id: "5", text: "１じかんだけかかります。", translate: "Chỉ mất một giờ thôi" },
              { id: "6", text: " “Giấc mơ không phải là thứ bạn nhìn thấy khi ngủ, giấc mơ là những điều mà không cho phép bạn ngủ” – Cristiano Ronaldo" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "7", title: "Đếm đồ vật nói chung", data: [
              { id: "1", text: "1 cái ひとつ \m2 cái ふたつ\n3 cái みっつ\n4 cái よっつ\n5 cái  いつつ" },
              { id: "2", text: "6 cái むっつ\n7 cái ななつ\n8 cái やっつ\n9 cái ここのつ\n10 cái とお" },
              { id: "3", text: "Mấy cái いくつ " },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "8", title: "Đếm người ～人", data: [
              { id: "1", text: "1 người ひとり\n2 người ふたり\n3 người さんにん\n4 người よにん\n5 người ごにん" },
              { id: "2", text: "6 người ろくにん\n7 người ななにん、しちにん\n8 người はちにん\n9 người きゅうにん\n10 người じゅうにん" },
              { id: "3", text: "Mấy người なんにん" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "9", title: "Đếm số lần ～回", data: [
              { id: "1", text: "1 lần いっかい\n2 lần にかい\n3 lần さんかい\n4 lần よんかい\n5 lần ごかい" },
              { id: "2", text: "6 lần ろっかい\n7 lần  ななかい\n8 lần はっかい\n9 lần きゅうかい\n10 lần じゅっかい、じっかい" },
              { id: "3", text: "Mấy lần なんかい" },
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
      {
        id: "12", title: "Bài 12", lession: [
          {
            id: "1", title: " So sánh hơn", data: [
              { id: "1", text: "N1は　N2より　A～。" },
              { id: "2", text: "N1 mang tính chất A hơn N2\nより có nghĩa là hơn" },
              { id: "3", text: "りんごは　バナナより　たかいです。", translate: "Táo thì đắt hơn chuối" },
              { id: "5", text: "くるまは バイク より　はやいです。", translate: "Ô tô nhanh hơn xe đạp." },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "2", title: "So sánh kém", data: [
              { id: "1", text: "N1は　N2ほど　～Aない。" },
              { id: "2", text: "ほど đi với đuôi phủ định mang ý nghĩa N1 mang tính chất A không bằng N2." },
              { id: "3", text: "バナナは　りんごほど　たかくないです。", translate: "Chuối không đắt bằng táo" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "3", title: "So sánh bằng", data: [
              { id: "1", text: "～N1は　N2と　おなじぐらい　～。" },
              { id: "2", text: "N1 và N2 như nhau (về tính chất, đặc điểm gì đó)" },
              { id: "3", text: "Aさんは　Bさんと　おなじぐらい　せが　たかいです。", translate: "A cao bằng B" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "4", title: "So sánh nhất", data: [
              { id: "1", text: "Danh từ 1 (のなか) で + なん／どこ／だれ／いつ + が いちばん Tính từ ですか" },
              { id: "2", text: "Nghĩa : Trong phạm vi danh từ 1, cái gì/ ở đâu/ ai/ khi nào … nhất ?" },
              { id: "3", text: "ベトナムで どこが いちばん きれいですか。", translate: "Ở Việt Nam, nơi nào đẹp nhất?" },
              { id: "4", text: "Cách trả lời : Danh từ 2 が いちばん Tính từ です" },
              { id: "5", text: "ハノイが いちばんきれいです。", translate: "Hà Nội là nơi đẹp nhất." },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "5", title: "Câu hỏi so sánh", data: [
              { id: "1", text: "Danh từ 1 と danh từ 2 と どちらが Tính từ ですか" },
              { id: "2", text: "Nghĩa : Giữa danh từ 1 và danh từ hai, cái nào … hơn ?" },
              { id: "3", text: "にほんごとえいごと どちらが すきですか。", translate: "Tiếng Nhật và tiếng Anh, bạn thích tiếng nào hơn?" },
              { id: "4", text: "Cách trả lời : Danh từ 1(danh từ 2)　のほうが tính từ です" },
              { id: "5", text: "にほんごの ほうがすきです。", translate: "Tôi thích tiếng Nhật hơn." },
              { id: "6", text: "ほんと えいがと どちらが おもしろいですか。\nどちらもおもしろいです。", translate: "Sách và phim cái nào thú vị hơn?\nCả 2 đều thú vị." },
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
      {
        id: "13", title: "Bài 13", lession: [
          {
            id: "1", title: " Muốn cái gì đó", data: [
              { id: "1", text: "Danh từ が + ほしい + です" },
              { id: "2", text: " Dùng để biểu thị ý muốn có một cái gì đó" },
              { id: "3", text: "いま、 あなた は なに が ほしい です か", translate: "Bây giờ bạn muốn cái gì ?" },
              { id: "5", text: "わたし は パン が ほしい です", translate: "Tôi muốn có một ổ bánh mì", audio: true },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "2", title: "Muốn làm cái gì đó", data: [
              { id: "1", text: "Động từ thể ます (bỏ ます)　＋　たいです" },
              { id: "2", text: "たべます trở thành たべたい"  },
              { id: "3", text: "わたしはおきなわへいきたいです。", translate: "Tôi muốn đi Okinawa", audio: true },
              { id: "4", text: "Mẫu câu [ほしい] và [たいです], không thể dùng để biểu thị ham muốn của người thứ 3" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "3", title: " Đi/đến/về đâu để làm việc gì", data: [
              { id: "1", text: "Danh từ(địa điểm) + へ　+ Danh từ/ động từ thể [ます]　+ に　いきます/　きます /　かえります" },
              { id: "2", text: "Danh từ/ động từ thể [ます] đặt trước trợ từ [に] nhằm biểu thi mục đích của [いきます/　きます /　かえります]" },
              { id: "3", text: "わたし は にほん へ にほんご を べんきょうし に いき たい です", translate: "Tôi muốn đến Nhật Bản để học tiếng Nhật" },
              { id: "4", text: "あした、 わたし は きょうと の おまつり に いき ます", translate: "Ngày mai tôi đi đến lễ hội ở Tokyo" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "4", title: "どこか / なにか", data: [
              { id: "1", text: "[どこか] : Ở đâu đó\n[なにか] : Cái gì đó" },
              { id: "2", text: "ふゆやすみはどこか(へ)いきましたか？", translate: "Kì nghỉ đông có đi đâu đó chơi không ?" },
              { id: "4", text: "Có thể lược bỏ các trợ từ [へ],[を] sau [どこか] và [なにか]" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "5", title: "Câu hỏi so sánh", data: [
              { id: "1", text: "Danh từ 1 と danh từ 2 と どちらが Tính từ ですか" },
              { id: "2", text: "Nghĩa : Giữa danh từ 1 và danh từ hai, cái nào … hơn ?" },
              { id: "3", text: "にほんごとえいごと どちらが すきですか。", translate: "Tiếng Nhật và tiếng Anh, bạn thích tiếng nào hơn?" },
              { id: "4", text: "Cách trả lời : Danh từ 1(danh từ 2)　のほうが tính từ です" },
              { id: "5", text: "にほんごの ほうがすきです。", translate: "Tôi thích tiếng Nhật hơn." },
              { id: "6", text: "ほんと えいがと どちらが おもしろいですか。\nどちらもおもしろいです。", translate: "Sách và phim cái nào thú vị hơn?\nCả 2 đều thú vị." },
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
      {
        id: "14", title: "Bài 14", lession: [
          {
            id: "1", title: "Phân nhóm động từ", data: [
              { id: "1", text: "Động từ tiếng Nhật có đuôi thay đổi. Người ta gọi đây là chia cách động từ. " },
              { id: "2", text: "Chúng ta có thể đặt ra nhiều câu khác nhau với ý nghĩa khác nhau bằng cách đặt đằng sau dạng chia cách động từ những đuôi khác nhau." },
              { id: "3", text: "Căn cứ vào cách chia động từ được phân ra làm 3 nhóm" },
              { id: "4", text: "Nhóm I\n\nV［い］ます　Những động từ có [hàng い] + ます" },
              { id: "5", text: "かきます\n\nのみます" },
              { id: "6", text: "Nhóm II\n\nV［え］ます　Những động từ có [hàng え] + ます" },
              { id: "7", text: "たべます\n\nみせます" },
              { id: "8", text: "Nhóm III\n\n来ます\nします（Nします）" },
              { id: "1000", text: "", quit: true },


            ]
          },
          {
            id: "2", title: "Động từ thể て", data: [
              { id: "1", text: "Các động từ kết thúc bằng て、で được gọi là thể て." },
              { id: "2", text: "Cách chia của thể て phụ thuộc vào các nhóm động từ"  },
              { id: "3", text: "Nhóm I" },
              { id: "4", text: "い、ち、り　→　って" },
              { id: "5", text: "まちます→	まって\nとります→	とって\n あいます→	あって" },
              { id: "6", text: "み、び、に　→　んで" },
              { id: "7", text: "のみます→	のんで\n\nあそびます→	あそんで" },
              { id: "8", text: "き、ぎ　→　いて、いで" },
              { id: "9", text: "かきます→	かいて\nききます→	きいて\nおよぎます→	およいで" },
              { id: "10", text: "し →　して" },
              { id: "11", text: "はなします →	はなして" },
              { id: "12", text: "Nhóm II" },
              { id: "13", text: "Vます　　→　Vて" },
              { id: "14", text: "たべます → たべて\n ねます → ねて" },
              { id: "15", text: "Nhóm III" },
              { id: "16", text: "来ます→　来て\nします→　して（Nします　→　Nして）" },
              { id: "1000", text: "", quit: true },


            ]
          },
          {
            id: "3", title: "Hãy làm gì đó", data: [
              { id: "1", text: "Động từ thể [て] + ください" },
              { id: "2", text: "Để lịch sự yêu cầu hay nhờ ai đó làm việc gì đó" },
              { id: "3", text: "くすりをのんでください。", translate: "Hãy uống thuốc đi" },
              { id: "4", text: "かんじをかいてください。", translate: "Hãy viết chữ kanji đi" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "4", title: "Đang làm gì đó", data: [
              { id: "1", text: "Động từ thể [て] + います" },
              { id: "2", text: "Dùng để diễn tả một hành động đang diễn ra tại thời điểm nói" },
              { id: "4", text: "いまあなたはなにをしていますか。", translate: "Bây giờ bạn đang làm gì vậy?" },
              { id: "5", text: "わたしはえいがをみています。", translate: "Tôi đang xem phim" },
              { id: "1000", text: "", quit: true },


            ]
          },
          {
            id: "5", title: "Cách làm ~", data: [
              { id: "1", text: "", uri: require('../assert/n5/lession14/kata.png') },
              { id: "2", text: "Vかた mang tính chất là một danh từ." },
              { id: "3", text: "漢字を　書きます  Viết Hán tự\n漢字の　書き方 Cách viết Hán tự" },
              { id: "4",  text: "", uri: require('../assert/n5/lession14/vidukata.png')},
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "6", title: "~ nhé", data: [
              { id: "1", text: "Động từ thể [ます] + ましょうか" },
              { id: "2", text: "Cách dùng : đề nghị được làm giúp ai đó việc gì" },
              { id: "3", text: "でんきをけしましょうか。" , translate: "Tôi tắt đèn giúp bạn nhé!"},
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "7", title: "Danh từ [が] động từ", data: [
              { id: "1", text: "Khi muốn miêu tả một hiện tượng tự nhiên ta dùng [が] trước chủ đề đó" },
              { id: "2", text: "あめがふります。\nTrời mưa" },
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
      {
        id: "15", title: "Bài 15", lession: [
          {
            id: "1", title: "Làm ~ được", data: [
              { id: "1", text: "Động từ thể て + もいいです" },
              { id: "2", text: "Nói với ai đó rằng họ được phép làm điều gì đó" },
              { id: "3", text: "しゃしん を とって も いい です。", translate: "Bạn có thể chụp hình" },
              { id: "4", text: "たばこ を すって も いい です か。", translate: "Tôi có thể hút thuốc không ?" },
              { id: "5", text: "Vても　いいです：làm ~ cũng được.\nVても　かまいません：làm ~ cũng không sao." },
              { id: "6", text: "Trường hợp không cho phép thì trả lời tế nhị すみません、ちょっと… hoặc trả lời theo cách cấm đoán với cấu trúc いけません ở ngữ pháp tiếp theo." },
              { id: "7", text: "すみませんが、タバコを　すってもいいですか。", translate: "Xin thứ lỗi, tôi hút thuốc cũng được chứ." },
              { id: "1000", text: "", quit: true },


            ]
          },
          {
            id: "2", title: "Không được làm ~", data: [
              { id: "1", text: "Nói với ai đó rằng họ không được phép làm điều gì đó" },
              { id: "2", text: "Động từ thể て + は いけません"  },
              { id: "3", text: "Chữ [は ] được đọc là [わ]" },
              { id: "4", text: "ここ で たばこ を すって は いけません", translate: "Bạn không được phép hút thuốc ở đây" },
              { id: "4", text: "せんせい 、ここ で あそんで も いい です か?", translate: "Thưa ngài, chúng con có thể chơi ở đây được không ?" },
              { id: "4", text: "Nếu là câu hỏi thì phải trả lời はい、いいです hoặc いいえ、いけません" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "3", title: "～Vています", data: [
              { id: "1", text: "Ngoài ý nghĩa là một hành động đang diễn ra thì còn có 2 nghĩa khác" },
              { id: "2", text: "Trạng thái: biết, có vợ-chồng, sinh sống..." },
              { id: "3", text: "わたしはけっこんしています。", translate: "Tôi đã kết hôn rồi" },
              { id: "4", text: "わたしはたなかさんをしっています。", translate: "Tôi biết anh Tanaka" },
              { id: "5", text: "Dùng để nói về tập quán, thói quen,nghề nghiệp,tình cảnh,.." },
              { id: "6", text: "IMCはコンプーターをつくっています。", translate: "Công ty IMC sản xuất máy tính" },
              { id: "7", text: "いもうとはだいがくでべんきょうしています。", translate: "Em gái tôi học đại học" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "4", title: "N(địa điểm)に V。", data: [
              { id: "1", text: "Trợ từ に biểu thị địa điểm của chủ ngữ có mặt sau khi thực hiện hành động V." },
              { id: "2", text: "Những động từ được dùng Nに～" },
              { id: "4", text: "はいります vào trong N\nすわります ngồi lên N\nのります lên N(xe tàu)\nのぼります leo N(núi)\nつきます đến N" },
              { id: "5", text: "ここに　入っては　いけません。", translate: "Không được vào chổ này" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "5", title: "Cách làm ~", data: [
              { id: "1", text: "", uri: require('../assert/n5/lession14/kata.png') },
              { id: "2", text: "Vかた mang tính chất là một danh từ." },
              { id: "3", text: "漢字を　書きます  Viết Hán tự\n漢字の　書き方 Cách viết Hán tự" },
              { id: "4",  text: "", uri: require('../assert/n5/lession14/vidukata.png')},
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "6", title: "~ nhé", data: [
              { id: "1", text: "Động từ thể [ます] + ましょうか" },
              { id: "2", text: "Cách dùng : đề nghị được làm giúp ai đó việc gì" },
              { id: "3", text: "でんきをけしましょうか。" , translate: "Tôi tắt đèn giúp bạn nhé!"},
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "7", title: "Danh từ [が] động từ", data: [
              { id: "1", text: "Khi muốn miêu tả một hiện tượng tự nhiên ta dùng [が] trước chủ đề đó" },
              { id: "2", text: "あめがふります。\nTrời mưa" },
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
      {
        id: "16", title: "Bài 16", lession: [
          {
            id: "1", title: "Làm~, làm~ ", data: [
              { id: "1", text: "Động từ thể て、 [động từ thể て、] ～" },
              { id: "2", text: "Mẫu câu dùng thể 「て」 để nối từ 2 động từ trở lên với nhau" },
              { id: "3", text: "Đặt động từ theo thứ tự xảy ra" },
              { id: "4", text: "たばこ を すって も いい です か。あさジョギングをして、シャワーをあびて、かいしゃへいきます", translate: "Buổi sáng tôi chạy bộ, tắm rồi đến công ty" },
              { id: "5", text: "Thì của câu do động từ cuối quyết định" },
              { id: "6", text: "こうべへいって、えいがをみて、おちゃをのみました。", translate: "Tôi đến Kobe, xem phim rồi uống trà." },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "2", title: "tính từ~, tình từ~", data: [
              { id: "1", text: "Tính từ đuôi い → ～くて、～" },
              { id: "2", text: "Mẫu câu dùng để nối tính từ đuôi い với một ngữ hoặc một câu khác"  },
              { id: "3", text: "Khi nối tính từ thì phải bỏ [い] thêm [くて], tính từ cuối cùng không bỏ [い]" },
              { id: "4", text: "おおきいーー＞おおきくて\nちいさいーー＞ちいさくて" },
              { id: "5", text: "ミラーさんはわかくて、げんきです。", translate: "Anh Miller trẻ và khỏe mạnh" },
              { id: "6", text: "Ngoại lệ : いいーーーーー＞よくて" },
              { id: "7", text: "きのうはてんきがよくて、あついです。", translate: "Hôm qua thời tiết đẹp và nóng" },
              { id: "8", text: "Tính từ đuôi な（bỏ な）+ で、～" },
              { id: "9", text: "Mẫu câu dùng để nối các câu có tính từ đuôi な cùng hoặc không cùng chủ đề"  },
              { id: "12", text: "ミラーさんはハンサムっで、しんせつです。", translate: "Anh Miller vừa đẹp trai và tốt bụng" },
              { id: "14", text: "ならはきれいで、しずかなまちです。", translate: "Nara là một thành phố đẹp và yên tĩnh" },
              { id: "1000", text: "", quit: true },
              

            ]
          },
          {
            id: "3", title: "danh từ~danh từ ~", data: [
              { id: "1", text: "Mẫu câu dùng để nối các câu có Danh từ cùng hoặc không cùng chủ đề" },
              { id: "2", text: "カリナさんはインドネシアじんで、きょうとだいがくのりゅうがくせいです。", translate: "Chị Karina là người Indonesia và là lưu học sinh tại trường đại học Kyoto" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "4", title: " Sau khi làm V1, thì làm V2", data: [
              { id: "1", text: "Động từ 1 thể て から、Động từ 2" },
              { id: "2", text: "Thời của câu do động từ cuối quyết định" },
              { id: "4", text: "くにへかえってから、ちちのかいしゃではたらきます。", translate: "Sau khi về nước, tôi làm việc ở công ty của bố" },
              { id: "5", text: "コンサートがおわってから、レストランでしょくじしました。", translate: "Sau khi buồi hòa nhạc kết thúc, tôi đi ăn ở nhà hàng" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "5", title: "Chi tiết của tổng thể", data: [
              { id: "1", text: "Tổng thể は　chi tiết　が　～" },
              { id: "2", text: "おおさかはたべものがおいしいです。", translate: "Đồ ăn ở Osaka ngon" },
              { id: "3", text: "おおさか là tổng thể, たべもの là chi tiết(đò ăn tại Oosake)" },
               { id: "4", text: "マリアさんはかみがながいです。", translate: "Tóc của chị Maria dài" },
               { id: "1000", text: "", quit: true },


            ]
          },
          {
            id: "6", title: " Làm thế nào/ bằng cách nào", data: [
              { id: "1", text: "Mẫu câu dùng để hỏi về trình tự hoặc cách làm việc gì đó.\nTrả lời thì dùng cách nối câu bằng động từ thể て" },
              { id: "2", text: "どうやって +  Câu ." },
              { id: "3", text: "だいがくまでどうやっていきますか？" , translate: "Đến trường đại học bằng cách nào?"},
              { id: "4", text: "きょうとえきで１６ばんのバスにのって、だいがくまえでおります。" , translate: "Lên xe buýt số 16 ở ga Kyoto rồi xuống ở trước trường đại học"},
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "7", title: "Cái nào", data: [
              { id: "1", text: "どの đứng trước danh từ, dùng để xác định một đối tượng (vật/người)trong một nhóm đối tượng từ 3 trở lên" },
              { id: "2", text: "サントスさんはどのふとですか？" , translate: "Anh Santos là người nào?" },
              { id: "3", text: "あのせがたかくて、かみがくろいひとです。" , translate: "Là người cao và tóc đen đó" },
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
       {
        id: "17", title: "Bài 17", lession: [
          {
            id: "1", title: "Thể ない của động từ", data: [
              { id: "1", text: "Thể của động từ khi đi kèm với [ない] được gọi là thể [ない] của động từ." },
              { id: "2", text: "Ví dụ như [かかない] là thể [ない] của động từ [かきます].Là cách nói ngắn của thể phủ định." },
              { id: "3", text: "Nhóm I: V「い」ます　→　V「あ」ます\n\t\t い　　→　 わ" },
              { id: "4", text: "かきます	かかない\nききます	きかない\nおよぎます	およがない\nのみます	のまない\nあそびます	あそばない\nまちます	またない\nとります	とらない\nあいます	あわない\nはなします	はなさない" },
              { id: "5", text: "Nhóm II:\n\tVます 　→　Vない" },
              { id: "6", text: "たべます → たべない\nいれます → いれない" },
              { id: "7", text: "Nhóm III:\nします　→　しない\nきます　→　こない" },
              { id: "8", text: "べんきょうします → べんきょうしない" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "2", title: " Đừng làm ~", data: [
              { id: "1", text: "Động từ thể [ない] + ないでください" },
              { id: "2", text: "Khi muốn khuyên hay yêu cầu ai không làm gì việc gì đó"  },
              { id: "5", text: "わたしはげんきですから、しんぱいしないでください。", translate: "Tôi khỏe lắm nên đừng lo lắng." },
              { id: "7", text: "ここでしゃしんをとらないでください.", translate: "Xin đừng chụp ảnh ở đây" },
              { id: "1000", text: "", quit: true },


            ]
          },
          {
            id: "3", title: "Bắt buộc phải ~", data: [
              { id: "1", text: "Động từ thể [ない] + なければなりません" },
              { id: "2", text: "Biểu thị một việc coi như nghĩa vụ phải làm, bất chấp ý hướng của người làm." },
              { id: "3", text: "động từ chia sang thể [ない], bỏ [い] + [ければなりません]" },
              { id: "4", text: "まいにち にほんご を べんきょうしなければなりません。", translate: "Hàng ngày (tôi) phải học tiếng Nhật." },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "4", title: "Không phải làm ~", data: [
              { id: "1", text: "Động từ thể [ない] + なくてもいいです" },
              { id: "2", text: " biểu thị sự không cần thiết của hành vi mà động từ diễn tả\nđộng từ chia sang thể [ない] bỏ [い]" },
              { id: "4", text: "あすこなくてもいいです。", translate: "Ngày mai bạn không đến cũng được." },
              { id: "5", text: "どようびのごごべんきょうしなくてもいいですか。", translate: "Chiều thứ 7 không học có được không ạ?" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "5", title: "Danh từ(tân ngữ) は", data: [
              { id: "1", text: "Đưa tân ngữ lên làm chủ đề nhằm nhấn mạnh ý muốn diễn tả" },
              { id: "2", text: "ここに にもつ を おかないでください。", translate: "Đừng để hành lý ở đây" },
              { id: "3", text: "Vì được đưa lên làm chủ đề nên trợ từ [を] của tân ngữ được thay bằng [は]" },
               { id: "4", text: "にもつ は ここに おかないでください。", translate: "Hành lý thì xin đừng để ở đây" },
               { id: "1000", text: "", quit: true },


            ]
          },
          {
            id: "6", title: "Trước khi ~", data: [
              { id: "1", text: "Hành động hay công việc phải được tiến hành trước thời hạn được chỉ định bởi [までに]" },
              { id: "2", text: "[までに] khác với trợ từ [まで] và trợ từ [に]" },
              { id: "3", text: "かいぎは５じまでにおわります。" , translate: "Cuộc họp sẽ kết thúc trước 5 giờ"},
              { id: "4", text: "どようび までに ほん を かえさなければなりません。" , translate: "Phải trả sách trước thứ 7"},
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
      {
        id: "18", title: "Bài 18", lession: [
          {
            id: "1", title: "Động từ thể nguyên dạng Vる", data: [
              { id: "1", text: "Thể nguyên mẫu (còn gọi là thể từ điển) là thể cơ bản (động từ gốc) của động từ, trong sách từ điển các động từ được trình bày ở thể này." },
              { id: "2", text: "Nhóm I:\n\tV［い］ます　→　V［う］" },
              { id: "3", text: "かきます	かく\nききます	きく\nおよぎます	およぐ\nのみます	のむ\nあそびます	あそぶ\nまちます	まつ\nとります	とる\nあいます	あう\nはなします	はなす" },
              { id: "4", text: "Nhóm II:\n\tV ます　→　V る" },
              { id: "5", text: "たべます → たべる\nみます → みる" },
              { id: "6", text: "Trừ một số động từ đặc biệt:\n\tかえります→かえる\nしります→しる" },
              { id: "7", text: "Nhóm III:\nきます　→　くる\nします　→　する" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "2", title: "Có thể làm~", data: [
              { id: "1", text: "Động từ thể từ điển こと / Danh từ  + ができます" },
              { id: "2", text: "Danh từ được sử dụng phải có tính động tác hay các danh từ chỉ khả năng như 日本語(にほんご)、ピアノ、スキー"  },
              { id: "3", text: "Phải thêm こと sau động từ thể từ điển để biến thành một nhóm danh từ" },
              { id: "4", text: "Động từ [できます] có 2 nghĩa là năng lực, khả năng" },
              { id: "5", text: "にほんごができます。", translate: "Tôi biết tiếng Nhật", uri: require('../assert/n5/lession18/lession18-2.png') },
              { id: "6", text: "えをかくことができます。", translate: "Tôi có thể vẽ tranh (Năng lực)" },
              { id: "7", text: "カードではらうことが できます。", translate: "Có thể thanh toán bằng thẻ. (Khả năng)" },
              { id: "1000", text: "", quit: true },



            ]
          },
          {
            id: "3", title: "Sở thích của tôi là ~", data: [
              { id: "1", text: "わたしのしゅみは　Động từ thể từ điển こと / Danh từ です" },
              { id: "2", text: "Dùng danh từ và động từ thể từ điển thêm [こと] để nói về sở thích" },
              { id: "3", text: "あなたのしゅみはなんですか。", translate: "Sở thích của bạn là gì?" },
              { id: "4", text: "りょこうです。", translate: "Là đi du lịch." },
              { id: "5", text: "わたしのしゅみはえいがをみることです。", translate: "Sở thích của tôi là xem phim" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "4", title: "Trước khi ~", data: [
              { id: "1", text: "Danh từ の / Động từ thể từ điển / Từ chỉ thời gian + まえに + ~" },
              { id: "2", text: "Trước khi gì/ làm gì/ lúc nào" },
              { id: "4", text: "いつこのくすりをのみますか。", translate: "Uống thuốc này khi nào?" },
              { id: "5", text: "ねるまえにのみます。", translate: "Uống trước khi ngủ." },
              { id: "6", text: "かいぎのまえにレポートをじゅんびしました。", translate: "Trước cuộc họp, tôi đã chuẩn bị báo cáo." },
              { id: "7", text: "がつまえに、フエへきました。", translate: "3 tháng trước, tôi đã đến Huế." },
              { id: "1000", text: "", quit: true },
              

            ]
          },
          {
            id: "5", title: "Mãi mà không …", data: [
              { id: "1", text: "なかなか + động từ phủ định" },
              { id: "2", text: "バスが なかなか きません。", translate: "Xe buýt mãi mà không thấy tới" },
               { id: "3", text: "ハノイでなかなかゆきをみることができません。", translate: "Ở Hà Nội, mãi mà tôi không nhìn thấy tuyết" },
               { id: "1000", text: "", quit: true },


            ]
          },
          {
            id: "6", title: " Nhất định", data: [
              { id: "1", text: "ぜひ Biểu thị sự hy vọng hay yêu cầu" },
              { id: "2", text: "ぜひにほんへいきたいです。"  , translate: "Tôi rất muốn đi Nhật Bản"},
              { id: "3", text: "ぜひあそびにきてください。" , translate: "Bạn nhất định phải đến nhà tôi chơi đấy nhé!"},
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
      {
        id: "19", title: "Bài 19", lession: [
          {
            id: "1", title: "Động từ thể [た]", data: [
              { id: "1", text: "Là cách nói ngắn của thì quá khứ.\nCách chia giống thể て, thay て bằng た." },
              { id: "3", text: "Nhóm I" },
              { id: "4", text: "い、ち、り　→　った" },
              { id: "5", text: "まちます→	まった\nとります→	とった\n あいます→	あった", audio: true },
              { id: "6", text: "み、び、に　→　んた" },
              { id: "7", text: "のみます→	のんた\n\nあそびます→	あそんた" },
              { id: "8", text: "き、ぎ　→　いた、いた" },
              { id: "9", text: "かきます→	かいた\nききます→	きいた\nおよぎます→	およいた" },
              { id: "10", text: "し →　した" },
              { id: "11", text: "はなします →	はなした" },
              { id: "12", text: "Nhóm II" },
              { id: "13", text: "Vます　　→　Vた" },
              { id: "14", text: "たべます → たべた\n ねます → ねた" },
              { id: "15", text: "Nhóm III" },
              { id: "16", text: "来ます→　来た\nします→　した（Nします　→　Nした）" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "2", title: "Đã từng", data: [
              { id: "1", text: "Động từ thể [た]こと + が あります" },
              { id: "2", text: " nói về một kinh nghiệm đã gặp, đã từng trải qua trong quá khứ. Diễn tả việc không thường xuyên xảy ra"  },
              { id: "3", text: "あなたはにほんへいったことがありますか。", translate: "Bạn đã bao giờ đến Nhật Bản chưa?", audio: true},
              { id: "4", text: "いいえ、(いちど)ありません。", translate: "Chưa, chưa lần nào.", audio: true },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "3", title: "Nào là, nào là ~", data: [
              { id: "1", text: "Động từ thể [た] り、Động từ thể [た] り　+ します" },
              { id: "2", text: "Liệt kê một vài hành động đại diện trong số nhiều hành động mà chủ thể thực hiện mà không theo thứ tự thời gian, không cần biết cái nào xảy ra trước, cái nào xảy ra sau." },
              { id: "3", text: "Thì của mẫu câu được biểu thị ở cuối câu." },
              { id: "4", text: "にちようびそうじ)したり、せんたくしたりします。", translate: "Vào chủ Nhật tôi dọn nhà rồi giặt quần áo,v.v..", audio: true },
              { id: "5", text: "まいばんおんがくをきいたり、かんじをか)いたりします。", translate: "Mỗi tối tôi nghe nhạc, viết kanji,v.v.." , audio: true},
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "4", title: "Trở nên ~なる", data: [
              { id: "1", text: "Nghĩa : trở thành, trở nên để biểu thị sự thay đổi về trạng thái" },
              { id: "2", text: "Tính từ đuôi [い] Bỏ đuôi [い] thay thế bằng [く] + [なります]" },
              { id: "4", text: "さむいーー＞さむく　なります", translate: "Trở nên lạnh", audio: true },
              { id: "5", text: "Tính từ đuôi [な] Bỏ đuôi [な] thay thế bằng [に] + [なります]" },
              { id: "6", text: "げんき(な)ーー＞げんきになります", translate: "Trở nên khỏe" , audio: true},
              { id: "7", text: "Danh từ thêm [に] + [なります]" },
              { id: "8", text: "25さいになります", translate: "Sang tuổi 25", audio: true },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "5", title: "そうですね", data: [
              { id: "1", text: "Dùng để biểu thị đồng ý hay thông cảm với điều mà đối tác hội thoại nói vì mình cũng biết hay cũng nghĩa thế" },
              { id: "2", text: "Chúng ta cũng có thể diễn tả điều tương tự khi nói [そうですか] khi hạ giọng ở cuối câu" },
               { id: "3", text: "さむくなりましたね。\n。。。そうですね！", translate: "Trời trở lạnh rồi nhỉ\nVâng, đúng thế nhỉ!", audio: true },
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
      {
        id: "20", title: "Bài 20", lession: [
          {
            id: "1", title: " Kiểu lịch sữ và kiểu thông thường", data: [
              { id: "1", text: "Kiểu lịch sự là cách nói lịch sự có thể dùng trong mọi văn cảnh và nói với bất kì ai, chính vì vậy mà đây Là kiểu được dùng phổ biến trong hội thoại hằng ngày với người không có quan hệ thân." },
              { id: "3", text: "Được dùng để nói với người mới gặp lần đầu hay người kém tuổi hơn và không thân" },
              { id: "4", text: "Thể vị ngữ có các từ [ます] và [です] đi kèm dùng trong câu kiểu lịch sự gọi là thể lịch sự" },
              { id: "5", text: "Đối vối bạn bè thân, đồng nghiệp hay người trong gia đình thì chúng ta sẽ dùng kiểu thông thường" },
              { id: "6", text: "Để sử dụng thành thạp thể thông thường cần chú ý đến đến tuổi và mối quan hệ của người đang giao tiếp vì nếu dùng không đúng sẽ dẫn đến sự mất lịch sự cho người mình giao tiếp, vì nếu không chắc chắn thì hãy sử dụng biện pháp an toàn là thể lịch sự" },
              { id: "7", text: "Động từ ở Thể Lịch sự và Thể Thông thường" },
              { id: "8", text: "",uri:require('../assert/n5/lession20/lession20-v.png') },
              { id: "9", text: "Tính từ đuối [い] ở Thể Lịch sự và Thể Thông thường" },
              { id: "10",text: "",uri:require('../assert/n5/lession20/lession20-i.png')},
              { id: "11", text: "Tính từ đuối [な] ở Thể Lịch sự và Thể Thông thường" },
              { id: "12",text: "",uri:require('../assert/n5/lession20/lession20-na.png') },
              { id: "13", text: "Danh từ ở Thể Lịch sự và Thể Thông thường" },
              { id: "14", text: "",uri:require('../assert/n5/lession20/lession20-n.png')},
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "2", title: "Hội thoại dùng kiểu thông thường", data: [
              { id: "1", text: "Trong câu nghi vấn kiểu thông thường thì trợ từ [か] ở cuối câu thường được lược bỏ, và từ ở cuối câu được phát âm với giọng cao hơn" },
              { id: "2", text: "こーひーをのむ？\nうん、のむ。", translate: "Uồng cà phê không?\nUống", audio: true},
              { id: "3", text: "Có thể lược bỏ trợ を、へ、は、が nếu như văn cảnh có thể hiểu được ý nghĩa của câu." },
              { id: "4", text: "テレビ［を］見る？", translate: "Có xem TV không?", audio: true},
              { id: "5", text: "Không lược bỏ: で、に、から、まで、と vì nếu lược bỏ chúng sẽ không rõ nghĩa."},
              { id: "6", text: "Câu Vている Có thể lược bỏ い"},
              { id: "7", text: "あいして「い」る", translate: "Tôi yêu bạn", audio: true},
               { id: "8", text: "が thường được thay bằng けど, và được sử dụng nhiều trong hội thoại."},
              { id: "9", text: "そのカレーライス［は］辛いけど、おいしい。", translate: "Cơm cà ri đó tuy ngon nhưng mà cay", audio: true},
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
      {
        id: "21", title: "Bài 21", lession: [
          {
            id: "1", title: " Tôi nghĩ là ~", data: [
              { id: "1", text: "Động từ thể thông thường ＋と + おもいます" },
              { id: "3", text: "Dùng để biểu thị sự phán đoán, suy xét " },
              { id: "4", text: "あした　あめがふるとおもいます。", translate: "Tôi nghĩ mai trời sẽ mưa" },
              { id: "5", text: "テラさちゃんはねるとおもいます。", translate: "Tôi nghĩ em Terasa ngủ rồi" },
              { id: "6", text: "Khi phán đoán một nội dung mang ý nghĩa phủ định thì phần trước [と] là thể phủ định" },
              { id: "7", text: "ミラーさんは　このニュースをしっていますか？\nいいえ、たぶん　しらないとおもいます。", translate: "Anh Miller biết tin này không?\nKhông, tôi nghĩ chắc là không." },
              { id: "8", text: "Dùng để bày tỏ ý kiến" },
              { id: "9", text: "にほんはぶっかがたかいとおもいます。", translate: "Tôi nghĩa giá cả ở Nhật cao"  },
              { id: "10", text: "Khi muốn hỏi ý kiến của ai về vấn đề gì thì ta dùng mẫu câu [~について　どうおもいますか], không dùng [と] sau [どう]" },
              { id: "11", text: "あたらしいくうこうについてどうおもいますか？\nきれいですが、ちょっと　こうつうが　ふべんだ　とおもいます。", translate: "Anh nghĩ sao về sân bay mới ?\nTôi nghĩa là đẹp nhưng mà đi lại hơi bất tiện một chút"  },
              { id: "12", text: "Để thể hiện sự đồng ý hay không đồng ý với người khác, ta dùng như sau :" },
              { id: "13", text: "ファクスはべんりですね。\nわたしもそうおもいます。\nわたしはそう「は」おもいません。", translate: "Fax tiện lợi nhỉ!\nTôi cũng nghĩ vậy!\nTôi không nghĩ vậy!" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "2", title: "Nói là ~.", data: [
              { id: "1", text: "「Câu 」/ thể thông thường + と + いいます" },
              { id: "2", text: "Trích dẫn trực tiếp\nChúng ta để nguyên phần trích dẫn vào 「」"  },
              { id: "3", text: "ねるまえに、「おやすみなさい」といいます。", translate: "Trước khi ngủ, chúng ta nói Oyasuminasai"},
              { id: "4", text: "Trích dẫn gián tiếp\nDùng thể thông thường trước [と], thời của phần trích dẫn không phụ thuộc vào thời của câu" },
              { id: "5", text: "みらーさんはらいしゅうとうきょうへしうっちょするといいました。", translate: "Anh Miller nói tuần sau anh ấy sẽ đi công tác ở Tokyo"},
              { id: "1000", text: "", quit: true },


            ]
          },
          {
            id: "3", title: "Đúng không?", data: [
              { id: "1", text: "Động từ/ tính từ/ danh từ thể thông thường + でしょう？" },
              { id: "2", text: "Dùng khi kỳ vọng rằng người nghe cũng biết hoặc có sự hiểu biết về chuyện mình nói và mong muốn người nghe sẽ tán thành ý kiến của mình." },
              { id: "3", text: "でしょう được đọc lên giọng giống như 1 câu hỏi để xác nhận sự đồng tình của người nghe." },
              { id: "4", text: "にちようびえいがをみにいくでしょう？\nええ、いきます。", translate: "Chủ nhật bạn đi xem phim chứ nhỉ?\nỪ, đi chứ." },
              { id: "5", text: "そのかばんはたかかったでしょう？\nいいえ、そんなにたかくなかったです。", translate: "Cái túi xách đó chắc đắt lắm nhỉ?\nKhông, không đắt đến thế đâu" },
              { id: "6", text: "やまだせんせいはしんせつでしょう？\nええ、とてもしんせつです。", translate: "Thầy Yamada thân thiện nhỉ?\nỪ, rất thân thiện" },
              { id: "7", text: "ハイさんはにほんごのせんせいでしょう。\nいいえ、えいごのせんせいです。", translate: "Hải là giáo viên tiếng Nhật nhỉ?\nKhông, là giáo viên tiếng anh" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "4", title: "Tại ~ có N", data: [
              { id: "1", text: "Danh từ 1(địa điểm) で Danh từ 2 があります" },
              { id: "2", text: "Nghĩa : Ở danh từ 1 được tổ chức, diễn ra danh từ 2" },
              { id: "4", text: "Khi danh từ 2 là các sự kiện như bữa tiệc, buổi hòa nhạc, ngày hội, vụ tai nạn hay thảm họa… thì lúc đó [あります] có nghĩa là được tổ chức, diễn ra" },
              { id: "5", text: "こうべで おおきい じしん が ありました。", translate: "Ở Kobe đã (có) xảy ra trận động đất lớn"  },
              { id: "6", text: "あした、ゆきちゃんのうちでパーティーがあります。", translate: "Ngày mai, ở nhà Yuki sẽ tổ chức tiệc" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "5", title: "Chẳng hạn như", data: [
              { id: "1", text: "Danh từ + でも　+ động từ" },
              { id: "2", text: "Khi muốn để nghị hay đề xuất gì đó với người khác, ta dùng trợ từ [でも] để biểu thị một thứ tượng trưng trong một nhóm các đối tượng có cùng phạm trù" },
               { id: "3", text: "ちょっとびーるでものみませんか？", translate: "Bạn uống bia hay gì đó không ?" },
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
      {
        id: "22", title: "Bài 22", lession: [
          {
            id: "1", title: "Bổ nghĩa cho danh từ", data: [
              { id: "1", text: "Danh từ bổ nghĩa danh từ\nN1 の N2" },
              { id: "3", text: "ミラーさんのほん", translate: "Sách của anh Miller"  },
              { id: "4", text: "Tính từ bổ nghĩa danh từ\nTính từ N" },
              { id: "5", text: "あたらしいうち", translate: "Nhà mới" },
              { id: "6", text: "Trong tiếng Nhật khi bổ nghỉa cho danh từ thì phần bổ nghĩa luôn đứng trước phần được bổ nghĩa" },
              { id: "7", text: "Bổ nghĩa cho danh từ bằng mệnh đề phụ\nPhần đứng trước bổ nghĩa cho danh từ phải ở thể thông thường. " },
              { id: "8", text: "とうきょうへ　いくひと", translate:"Người sẽ đi Tokyo" },
              { id: "9", text: "とうきょうへいかないひと", translate: "Người không đi Tokyo"  },
              { id: "10", text: "とうきょうへいったひと", translate: "Người đã đi Tokyo" },
              { id: "11", text: "とうきょうへいかなかったひと", translate: "Người đã không đi Tokyo"  },
              { id: "12", text: "Nếu mệnh đề phụ là câu tính từ đuôi [な] thì thay [だ] bằng [な], còn nếu là danh từ thì thay [だ] bằng [の]" },
              { id: "13", text: "しんせつで、きれいなひと", translate: "Người đẹp và tốt bụng" },
              { id: "14", text: "６０さいのひと", translate: "Người 60 tuổi" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "2", title: "Thời gian làm một việc gì đó", data: [
              { id: "1", text: "Động từ thể từ điển + じかん / ようじ / やくそく" },
              { id: "2", text: "Khi muốn nói về thời gian làm một việc gì đó, ta dùng động từ thể từ điển đặt trước [じかん]"  },
              { id: "3", text: "わたしはあさごはんをたべるじかんがありません", translate: "Tôi không có thời gian ăn sáng"},
              { id: "4", text: "Khi muốn biễu thị nội dung của về một việc bận hay công chuyện,.. ta dùng động từ thể từ điển đặt trước [ようじ] và [やくそく]" },
              { id: "5", text: "ともだちとえいがをみるやくそくがあります。", translate: "Tôi có hẹn đi xem phim với bạn"},
              { id: "6", text: "きのうはしやくしょへいくようじがありました。", translate: "Hôm qua tôi có công việc phải lên Văn phòng hành chính thành phố"},
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
      {
        id: "23", title: "Bài 23", lession: [
          {
            id: "1", title: "Khi, lúc  ~", data: [
              { id: "1", text: " Động từ thể từ điển / động từ thể ない / danh từ の / danh từ の / tính từ đuôi い / tính từ đuồi な / danh từ の + とき" },
              { id: "3", text: "Nhấn mạnh về thời điểm xảy ra sự việc, thực hiện hành động." },
              { id: "4", text: "しんぶんをよむとき、めがねをかけます。", translate: "Tôi đeo kính khi đọc báo" },
              { id: "5", text: "でかけるとき、いってまいりますといいます。", translate: "Khi ra ngoài thì nói là “Tôi đi đây”" },
              { id: "6", text: "Với V1 とき,V2" },
              { id: "7", text: "V1た : Sau khi V1 thì V2 （V1 xảy ra trước）" },
              { id: "9", text: "部屋を　出たとき、ドアを　閉めます。", translate: "(Sau) Khi ra khỏi phòng thì đóng cửa."  },
              { id: "10", text: "Động từ đi kèm với とき chia ở thể た (出た) nên được hiểu 部屋を　出た xảy ra trước, ドアを　閉めます xảy ra sau." },
              { id: "11", text: "V1る : Trước khi V1 thì V2 （V1 xảy ra sau）"  },
              { id: "12", text: "きのう、家へ帰るとき、パンを　買いました。",translate: "Hôm qua (trước) khi về nhà tôi đã mua bánh."  },
              { id: "13", text: "Động từ đi kèm với とき chia ở thể る (帰る) nên được hiểu パンを　買いました xảy ra trước, 家へ帰る xảy ra sau." },
              { id: "14", text: "こない時とき、わたしにれんらくしてください。",translate: "Khi bạn không đến thì hãy liên lạc với tôi"  },
              { id: "15", text: "ひま)なとき、えいがをみます。",translate: "Khi rảnh rỗi thì tôi xem phim"  },
              { id: "16", text: "２７さいのとき、けっこんしました。",translate: "Khi tôi 27 tuổi, tôi đã kết hôn"  },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "2", title: "Khi ~", data: [
              { id: "1", text: "Động từ thể từ điển / Động từ thể た + とき" },
              { id: "2", text: "Động từ thể từ điển + とき : hành động chưa kết thúc"  },
              { id: "3", text: "とうきょうへいくとき、このかばんを かいました。", translate: "Tôi đã mua chiếc cặp này khi đi Tokyo。\n(Chiếc cặp này được mua trên đường đi đến Tokyo)"},
              { id: "4", text: "とうきょうへいったとき、このかばんをかいました。", translate: "Tôi đã mua chiếc cặp này khi đi Tokyo\n(Chiếc cặp này được mua sau khi đã đến Tokyo)" },
              { id: "5", text: "でかけるとき、でんきをけしてください。", translate: "Khi ra khỏi nhà, hãy tắt điện"},
              { id: "1000", text: "", quit: true },


            ]
          },
          {
            id: "3", title: "Qua ~", data: [
              { id: "1", text: "Danh từ (đại điểm)+ を + động từ" },
              { id: "2", text: "Dùng để chỉ địa điểm, vị trí nơi mà 1 người hay 1 vật nào đó đi qua" },
              { id: "4", text: "こうえんをさんぽします。", translate: "Đi dạo ở công viên" },
              { id: "5", text: "みちをわたります。", translate: "Băng qua đường" },
              { id: "6", text: "こうさてんをみぎへまがります。", translate: "Rẻ phải ở ngã tư" },
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
       {
        id: "24", title: "Bài 24", lession: [
          {
            id: "1", title: "làm ~ cho ai", data: [
              { id: "1", text: "Động từ thể て + あげます" },
              { id: "3", text: "Ai đó làm cho người khác một việc với ý nghĩa thiện chí, lòng tốt, thân thiện." },
              { id: "4", text: "Chủ ngữ là người thực hiện hành động." },
              { id: "5", text: "わたしはおじいさんにみちをおしえてあげました。",translate: "Tôi đã chỉ đường cho ông." },
              { id: "7", text: "わたしはゆきちゃんにほんごのほんをかしてあげました。", translate: "Tôi đã cho bạn Yuki mượn quyển sách tiếng Nhật." },
              { id: "9", text: "わたしはおばあさんにてがみをよんであげました。", translate: "Tôi đã đọc thư cho bà."  },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "2", title: "Cho, tặng", data: [
              { id: "1", text: "~くれます" },
              { id: "2", text: "Với [あげます] thể hiện việc người nói tặng cho ai, người nào đó tặng cho người khác."  },
              { id: "3", text: "は さとうさんに はなを あげました。", translate: "Tôi đã tặng hoa cho chị Sato."},
              { id: "4", text: "Còn [くれます] thể hiện việc ai đó tặng, cho người nói hoặc người thân trong gia đình người nói."},
              { id: "5", text: "さとうさんは わたしに クリスマスカードを くれました。", translate: "Sato đã tặng tôi một tấm thiếp Giáng Sinh."},
              { id: "1000", text: "", quit: true },



            ]
          },
          {
            id: "3", title: " Được ai đó làm gì cho", data: [
              { id: "1", text: "Biểu thị lòng biết ơn của người được nhận hành vi giúp đỡ" },
              { id: "2", text: "Động từ thể て + もらいます" },
              { id: "3", text: "Không dùng Vてもらいます để nói người khác đã nhận hành động từ mình." },
              { id: "4", text: "わたしはたなかさんに にほんごをおしえてもらいました。", translate: "Tôi được anh Tanaka dạy cho tiếng Nhật" },
              { id: "5", text: "わたしはともだちにケーキをつくってもらいました。", translate: "Tôi được bạn làm tặng bánh" },
              { id: "1000", text: "", quit: true },


            ]
          },
          {
            id: "4", title: "Ái làm cho cái gì", data: [
              { id: "1", text: "Động từ thể て + くれます" },
              { id: "2", text: "Thể hiện sự cảm tạ của người nhận hành vi giúp đỡ giống như [～てもらいます]" },
              { id: "4", text: "Trong mẫu [～てもらいます] chủ ngữ là người nhận" },
              { id: "5", text: "わたしはゆきちゃんにかさをかしてもらいました。", translate: "Tôi được Yuki cho mượn ô"  },
              { id: "6", text: "Trong mẫu [～てくれます], chủ ngữ là người thực hiện hành động" },
              { id: "7", text: "ゆきちゃんは(わたしに)かさをかしてくれました。", translate: "Yuki đã cho tôi mượn ô"  },
              { id: "8", text: "Người nhận thường là người nói nên [わたしに] thường được lược bỏ" },
              { id: "9", text: "いとながせんせいにおしえてもらいました。", translate: "Tôi được cô Itonaga dạy"  },
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
      {
        id: "25", title: "Bài 25", lession: [
          {
            id: "1", title: "Sau khi ~", data: [
              { id: "1", text: "V1たら、V2 : Nhấn mạnh khi V1 hình thành thì V2 chắc chắn sẽ xảy ra." },
              { id: "3", text: "うちへ かえったら、すぐ シャワーを あびます。",translate: "Về nhà là tôi đi tắm ngay" },
              { id: "4", text: "A: なんじごろ けんがくに いきますか。\nB: ひるごはんを たべたら、すぐ いきます。",translate: "A: Khoảng mấy giờ thì đi tham quan?\nB: Sau khi ăn cơm trưa xong là đi ngay" },
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "2", title: "Nếu/ giả sử ~,", data: [
              { id: "1", text: "Thể thông thường qua khứ + ら、。。。" },
              { id: "2", text: "Dùng khi người nói muốn biểu thị ý kiến, tình trạng, yêu cầu của mình trong trường hợp điều kiện được giả định"  },
              { id: "3", text: "かねが あったら、りょこうします。", translate: "Nếu có tiền tôi sẽ đi du lịch"},
              { id: "4", text: "じかんが なかったら、テレビを みません。", translate: "Nếu không có thời gian tôi sẽ không xem ti vi", audio: true},
              { id: "5", text: "[もし] được sử dụng trong mẫu câu giả định [~たら] để nhấn mạnh giả thuyết của người nói", audio: true},
              { id: "6", text: "もし おくえんあったら、いろいろなくにを りょこうしたいです。", translate: "Nếu có 100 triệu yên tôi muốn đi du lịch thật nhiều nước", audio: true},
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "3", title: "Cho dù ~", data: [
              { id: "1", text: "Động từ thể て＋も\nTính từ đuôi [い] bỏ [い] + くて＋も\nDanh từ/ tính từ đuôi [な] bỏ [な] ＋で＋も" },
              { id: "2", text: "Một hành động nào đó trong một hoàn cảnh nhất định đáng ra phải làm nhưng lại không làm, một việc nào đó đáng ra phải xảy ra nhưng lại không xảy ra" },
              { id: "3", text: "たかくても、このラジカセを かいたいです。",translate: "Mặc dù đắt nhưng tôi vẫn muốn mua cái radio-cassette này" , audio: true},
              { id: "4", text: "しずかでも、ねることが できません。", translate: "Mặc dù yên tĩnh nhưng cũng không ngủ được" , audio: true},
              { id: "5", text: "にちようびでも、しごとを します。", translate: "Mặc dù là chủ nhật nhưng vẫn làm việc", audio: true },
              { id: "6", text: "Thường hay đi cùng với いくら mang ý nhấn mạnh 'Cho dù có ~ bao nhiêu đi chăng nữa ~'" },
              { id: "7", text: "毎朝、雨が　降っても、ハイキングを　しています。", translate: "Mỗi sáng dẫu có mưa tôi cũng chạy bộ" , audio: true},
              { id: "1000", text: "", quit: true },

            ]
          },
          {
            id: "4", title: "Chủ ngữ của mệnh đề phụ", data: [
              { id: "1", text: "Trong các mệnh đề phụ với 「から」,「～たら」、「～手も」、「～と」、「～とき」、「～まえに」、 thì chủ ngữ được biểu thị bởi trợ từ 「が」." },
              { id: "2", text: "ともだちがくるまえに、へやをそうじします。", translate: "Trước khi bạn đến chơi, tôi dọn phòng", audio: true  },
              { id: "3", text: "つまがびょうきのとき、かいしゃをやすみます。", translate: "Khi vợ bị ốm, tôi nghỉ làm.", audio: true  },
              { id: "1000", text: "", quit: true },

            ]
          },
        ]
      },
    ],
  },
  // {
  //   id: 2,
  //   saved: false,
  //   title: 'N4',
  //   description: 'This attractive small town, 80 kilometers from Athens',
  //   uri: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
  //   images: [
  //     'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
  //     'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
  //   ],
  //   data: [
  //     {
  //       id: "1", title: "Bài 1", content: 'a i u e o', lession: [
  //         { id: "1", text: "Tiếng nhật là" },
  //         { id: "2", text: "Đầu tiên chúng ta sẽ học bản chữ cái hiragaraasdas asd a a s" },
  //         {
  //           id: "3", text: 'Hello this is an example of the ParsedText, links like http://www.google.com or http://www.facebook.com are clickable and phone number 444-555-6666 can call too.But you can also do more with this package, for example Bob will change style and David too.foo@gmail.comAnd the magic number is 42! #react #react - native'
  //         },
  //       ]
  //     },
  //     {
  //       id: "2", title: "Bài 2", content: 'ka ki ku ke ko', lession: [

  //       ]
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   user: {
  //     name: 'Lelia Chavez',
  //     avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  //   },
  //   num: 14,
  //   saved: true,
  //   location: 'Santorini, Greece',
  //   temperature: 34,
  //   title: 'N3',
  //   description: 'Santorini - Description',
  //   rating: 3.2,
  //   reviews: 3212,
  //   uri: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
  //   images: [
  //     'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
  //     'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
  //     'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
  //     'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
  //   ],
  //   data: [
  //     {
  //       id: "1", title: "Bài 1", content: 'a i u e o', lession: [
  //         { id: "1", text: "Tiếng nhật là" },
  //         { id: "2", text: "Đầu tiên chúng ta sẽ học bản chữ cái hiragaraasdas asd a a s" },
  //         {
  //           id: "3", text: 'Hello this is an example of the ParsedText, links like http://www.google.com or http://www.facebook.com are clickable and phone number 444-555-6666 can call too.But you can also do more with this package, for example Bob will change style and David too.foo@gmail.comAnd the magic number is 42! #react #react - native'
  //         },
  //       ]
  //     },
  //     {
  //       id: "2", title: "Bài 2", content: 'ka ki ku ke ko', lession: [

  //       ]
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   user: {
  //     name: 'Lelia Chavez',
  //     avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  //   },
  //   num: 17,
  //   location: 'Loutraki, Greece',
  //   temperature: 34,
  //   title: 'N2',
  //   description: 'This attractive small town, 80 kilometers from Athens',
  //   rating: 5,
  //   reviews: 3212,
  //   uri: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
  //   images: [
  //     'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
  //     'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
  //   ],
  //   data: [
  //     {
  //       id: "1", title: "Bài 1", content: 'a i u e o', lession: [
  //         { id: "1", text: "Tiếng nhật là" },
  //         { id: "2", text: "Đầu tiên chúng ta sẽ học bản chữ cái hiragaraasdas asd a a s" },
  //         {
  //           id: "3", text: 'Hello this is an example of the ParsedText, links like http://www.google.com or http://www.facebook.com are clickable and phone number 444-555-6666 can call too.But you can also do more with this package, for example Bob will change style and David too.foo@gmail.comAnd the magic number is 42! #react #react - native'
  //         },
  //       ]
  //     },
  //     {
  //       id: "2", title: "Bài 2", content: 'ka ki ku ke ko', lession: [

  //       ]
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   user: {
  //     name: 'khai',
  //     avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  //   },
  //   num: 18,
  //   location: 'Loutraki, Greece',
  //   temperature: 34,
  //   title: 'N1',
  //   description: 'This attractive small town, 80 kilometers from Athens',
  //   rating: 5,
  //   reviews: 3212,
  //   uri: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
  //   images: [
  //     'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
  //     'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
  //   ],
  //   data: [
  //     {
  //       id: "1", title: "Bài 1", content: 'a i u e o', lession: [
  //         { id: "1", text: "Tiếng nhật là" },
  //         { id: "2", text: "Đầu tiên chúng ta sẽ học bản chữ cái hiragaraasdas asd a a s" },
  //         {
  //           id: "3", text: 'Hello this is an example of the ParsedText, links like http://www.google.com or http://www.facebook.com are clickable and phone number 444-555-6666 can call too.But you can also do more with this package, for example Bob will change style and David too.foo@gmail.comAnd the magic number is 42! #react #react - native'
  //         },
  //       ]
  //     },
  //     {
  //       id: "2", title: "Bài 2", content: 'ka ki ku ke ko', lession: [

  //       ]
  //     },
  //   ],
  // },
]
const postLearn = [
  {
    id: 1,
    title: 'Hướng dẫn cách dùng',
    preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
    data: [
      { id: "1", text: "\t\t\t\tỨng dụng gồm phần giới thiệu về tiếng nhật, học bảng hiragana, học bảng katakana và học ngữ pháp N5." },
      { id: "2", text: "\t\t\t\tCác bài học được thiết kế dể hiểu, dẻ học và giao diện thân thiên. Các bạn nhớ học hành chăm chỉ nhé. Cố lên nào" },
      {
        id: "3", text: ''
      },
    ],
  },
  
  
  
  
];
const styles = StyleSheet.create({
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding * 1.33,
    paddingBottom: theme.sizes.padding * 0.66,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  articles: {
  },
  destinations: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  destination: {
    width: width - (theme.sizes.padding * 2),
    height: width * 0.6,
    marginHorizontal: theme.sizes.margin,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding * 0.66,
    borderRadius: theme.sizes.radius,
  },
  destinationInfo: {
    position: 'absolute',
    borderRadius: theme.sizes.radius,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding / 2,
    bottom: 20,
    left: (width - (theme.sizes.padding * 4)) / (Platform.OS === 'ios' ? 3.2 : 3),
    backgroundColor: theme.colors.white,
    width: width - (theme.sizes.padding * 4),
  },
  recommended: {
  },
  recommendedHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: theme.sizes.padding,
  },
  recommendedList: {
  },
  recommendation: {
    width: (width - (theme.sizes.padding * 2)) / 2,
    marginHorizontal: 8,
    backgroundColor: theme.colors.white,
    overflow: 'hidden',
    borderRadius: theme.sizes.radius,
    marginVertical: theme.sizes.margin * 0.5,
  },
  recommendationHeader: {
    overflow: 'hidden',
    borderTopRightRadius: theme.sizes.radius,
    borderTopLeftRadius: theme.sizes.radius,
  },
  recommendationOptions: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.sizes.padding / 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  recommendationTemp: {
    fontSize: theme.sizes.font * 1.25,
    color: theme.colors.white
  },
  recommendationImage: {
    width: (width - (theme.sizes.padding * 2)) / 2,
    height: (width - (theme.sizes.padding * 2)) / 2,
  },
  avatar: {
    width: theme.sizes.padding,
    height: theme.sizes.padding,
    borderRadius: theme.sizes.padding / 2,
  },
  rating: {
    fontSize: theme.sizes.font * 2,
    color: theme.colors.black,
    fontWeight: 'bold',
    textShadowColor: 'rgba(255, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: theme.colors.gray,
    borderColor: 'transparent',
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: theme.colors.active,
  }
});

class Articles extends Component {
  scrollX = new Animated.Value(0);

  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
    return {
      header: () => (
        <View style={[styles.flex, styles.row, styles.header,]}>
          <View>
            <Text style={{ fontSize: theme.sizes.font * 2 }}>Trang chủ</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Setting')} >
            <Image style={styles.avatar} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSux5TNwHc0_EjuUxu6n-2GCATfz38Pw3dkKE1EkP49CLfSrEEs&usqp=CAU' }} />
          </TouchableOpacity>
        </View>
      )
    }

  }

  renderDots() {
    const { destinations } = this.props;
    const dotPosition = Animated.divide(this.scrollX, width);
    return (
      <View style={[
        styles.flex, styles.row,
        { justifyContent: 'center', alignItems: 'center', marginTop: 10 }
      ]}>
        {destinations.map((item, index) => {
          const borderWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 2.5, 0],
            extrapolate: 'clamp'
          });
          return (
            <Animated.View
              key={`step-${item.id}`}
              style={[styles.dots, styles.activeDot, { borderWidth: borderWidth }]}
            />
          )
        })}
      </View>
    )
  }

  renderRatings(rating) {
    const stars = new Array(5).fill(0);
    return (
      stars.map((_, index) => {
        const activeStar = Math.floor(rating) >= (index + 1);
        return (
          <FontAwesome
            name="star"
            key={`star-${index}`}
            size={theme.sizes.font}
            color={theme.colors[activeStar ? 'active' : 'gray']}
          />
        )
      })
    )
  }

  renderDestinations = () => {
    return (
      <View style={[styles.column, styles.destinations]}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          style={{ overflow: 'visible', height: 280 }}
          data={this.props.destinations}
          keyExtractor={(item, index) => `${item.id}`}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX } } }])}
          renderItem={({ item }) => this.renderDestination(item)}
        />
        {this.renderDots()}
      </View>
    );
  }

  renderDestination = item => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.95} onPress={() => navigation.navigate('Article', { article: item })}>
        <ImageBackground
          style={[styles.flex, styles.destination, styles.shadow]}
          imageStyle={{ borderRadius: theme.sizes.radius }}
          source={item.uri}
        >
          <View style={[styles.row, { justifyContent: 'space-between' }]}>
            {/* <View style={{ flex: 0 }}>
              <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
            </View> */}
            <View style={[styles.column, { flex: 2, paddingHorizontal: theme.sizes.padding / 2 }]}>
              {/* <Text style={{ color: theme.colors.white, fontWeight: 'bold' }}>{item.num}</Text> */}
              {/* <Text style={{ color: theme.colors.black }}>
                <Octicons
                  name="heart"
                  size={theme.sizes.font * 1.25}
                  color={theme.colors.black}
                />
                <Text style={{ fontSize: theme.sizes.font * 1.25 }}> {item.title}</Text>
              </Text> */}
            </View>
            <View style={{ flex: 0, justifyContent: 'center', alignItems: 'flex-end', }}>
              <Text style={styles.rating}>{item.data.length} bài</Text>
            </View>
          </View>
        </ImageBackground>

        <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
          <Text style={{ fontSize: theme.sizes.font * 1.25, fontWeight: '500', paddingBottom: 8, }}>
            {item.title}
          </Text>
          <View style={[styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', }]}>
            <Text style={{ color: theme.colors.caption }}>
              {/* {item.description.split('').slice(0, 50)}... */}
              Học ngay
              </Text>
            <FontAwesome
              name="chevron-right"
              size={theme.sizes.font * 0.75}
              color={theme.colors.caption}
            />
          </View>
        </View>

      </TouchableOpacity>
    )
  }

  renderRecommended = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <View
          style={[
            styles.row,
            styles.recommendedHeader
          ]}
        >
          <Text style={{ fontSize: theme.sizes.font * 1.4 }}>Phổ biến</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={{ color: theme.colors.caption }}>More</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.column, styles.recommendedList]}>
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="center"
            style={[styles.shadow, { overflow: 'visible' }]}
            data={this.props.popular}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item, index }) => this.renderRecommendation(item, index)}
          />
        </View>
      </View>
    );
  }

  renderRecommendation = (item, index) => {
    const { popular } = this.props;
    const isLastItem = index === popular.length - 1;
    return (
      <View style={[
        styles.flex, styles.column, styles.recommendation, styles.shadow,
        index === 0 ? { marginLeft: theme.sizes.margin } : null,
        isLastItem ? { marginRight: theme.sizes.margin / 2 } : null,
      ]} >
        <TouchableOpacity style={[styles.flex, styles.recommendationHeader]} onPress={() => this.props.navigation.navigate('Post', { post: item })}>
          <Image style={[styles.recommendationImage]} source={{ uri: item.preview}} />
        </TouchableOpacity>
        <View style={[styles.flex, styles.column, styles.shadow, { justifyContent: 'space-evenly', padding: theme.sizes.padding / 2 }]}>
          <Text style={{ fontSize: theme.sizes.font * 1.25, fontWeight: '500', paddingBottom: theme.sizes.padding / 4.5, }}>{item.title}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: theme.sizes.padding }}
      >
        {this.renderDestinations()}
        {this.renderRecommended()}
      </ScrollView>
    )
  }
}

Articles.defaultProps = {
  destinations: mocks,
  popular: postLearn
};

export default Articles;