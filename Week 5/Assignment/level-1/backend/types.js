import zod from "zod";

const newCard = zod.object({
  name: zod.string(),
  description: zod.string(),
  interests: zod.array(zod.string()),
  buttons: zod.array(
    zod.object({
      title: zod.string(),
      url: zod.string(),
    })
  ),
});

export default newCard;
