import { random, range, sample } from "lodash";
import { Factory, Server } from "miragejs";

export default Factory.extend({
  userFullName: () => sample([
    "امیرمحمد چراغی",
    "سیدعلی سجادی",
    "امیررضا اسماعیلی",
    "امیرمهدی سلیمانی",
    "سجاد یزدان پرست",
  ]),
  classRoomName: () => sample([
    "کلاس طراحي شي گراي سيستم ها-01",
    "کلاس اقتصاد مهندسي-01",
    "کلاس مهندسي اينترنت-01",
    "کلاس آزمايشگاه شبكه هاي كامپيوتري-06",
  ]),
  message: () => {
    return 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.';
  },
  messageDate: () => new Date(2020, Math.random() * 11, Math.random() * 29),
  messageType: () => sample(['message', 'assignment']),
  attachedFiles: () => {
    const count = random(10);
    return range(count).map((i) => ({ fileName: `file_${i}.pdf`, fileUrl: 'url'}));
  },
  userAnswers: () => {
    const count = random(10);
    return range(count).map((i) => ({
      userFullName: sample([
        "امیرمحمد چراغی",
        "سیدعلی سجادی",
        "امیررضا اسماعیلی",
        "امیرمهدی سلیمانی",
        "سجاد یزدان پرست",
      ]),
       answer: `جواب سوال ${i}`
    }));
  },
  afterCreate(message: any, server: Server) {
    message.update({
      user: server.create('user'),
      classroom: message.classroom || server.create('classroom'),
    });
  }
});