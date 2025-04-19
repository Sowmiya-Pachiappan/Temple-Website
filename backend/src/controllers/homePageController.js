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
    const { title, description } = req.body;
    const image = req.file?.filename;

    const updatedFields = { title, description };
    if (image) {
      updatedFields.image = image;
    }

    const homepage = await HomePage.findOneAndUpdate(
      {},
      updatedFields,
      {
        new: true,
        upsert: true,
      }
    );

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
