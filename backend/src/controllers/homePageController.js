import HomePage from '../models/homePageModel.js';

export const getHomePage = async (req, res) => {
  try {
    const content = await HomePage.findOne();
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching homepage data',
      error: error.message,
    });
  }
};

export const updateHomePage = async (req, res) => {
  try {
    const { title, content } = req.body;
    const image = req.file?.filename;

    // Validate required fields
    if (!title || !content) {
      return res.status(400).json({
        message: 'Title and content are required',
      });
    }

    const updatedFields = {
      title,
      content,
    };

    if (image) {
      updatedFields.imageUrl = image;
    }

    let homepage = await HomePage.findOne();

    if (!homepage) {
      // Create if not exists
      homepage = await HomePage.create(updatedFields);
    } else {
      // Update existing record
      await homepage.update(updatedFields);
    }

    res.status(200).json({
      message: 'Homepage updated successfully',
      data: homepage,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating homepage',
      error: error.message,
    });
  }
};
