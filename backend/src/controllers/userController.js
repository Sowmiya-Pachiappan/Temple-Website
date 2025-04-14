export const connectUserToTemple = async (req, res) => {
  try {
    const { id: templeId } = req.params;
    const userId = req.user.id;

    const temple = await Temple.findByPk(templeId);
    if (!temple) {
      return res
        .status(404)
        .send({ message: 'Temple not found' });
    }

    const user = await User.findByPk(userId);
    if (!user) {
      return res
        .status(404)
        .send({ message: 'User not found' });
    }

    await temple.addUse(user);

    res.send({
      message: 'User connected to temple successfully',
    });
  } catch (error) {
    console.error('Connection error:', error);
    res
      .status(500)
      .send({ message: 'Internal server error' });
  }
};
