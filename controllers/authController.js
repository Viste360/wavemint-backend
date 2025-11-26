export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Hardcoded admin for now.
    // Later we move this into a DB.
    const ADMIN_EMAIL = "info@dustdeep.com";
    const ADMIN_PASSWORD = "25021975J";

    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Success
    return res.json({
      success: true,
      user: {
        email: ADMIN_EMAIL,
      },
      token: "fake-jwt-token-123", // You can upgrade later
    });

  } catch (err) {
    console.error("Auth error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
