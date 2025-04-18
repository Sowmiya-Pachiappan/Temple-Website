import HomePage from '../models/homePageModel.js';

export const getHomePage = async (req, res) => {
  try {
    const content = await HomePage.findOne();
    res.json(content);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch homepage content',
      error,
    });
  }
};
export const updateHomePage = async (req, res) => {
  try {
    const { title, content } = req.body;
    const imageUrl = req.file
      ? `/uploads/${req.file.filename}`
      : req.body.imageUrl;

    let homepage = await HomePage.findOne();
    if (!homepage) {
      homepage = await HomePage.create({
        title,
        content,
        imageUrl,
      });
    } else {
      await homepage.update({ title, content, imageUrl });
    }

    res.json({
      message: 'Homepage content updated',
      homepage,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to update content', error });
  }
};
