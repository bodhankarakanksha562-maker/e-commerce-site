# Code Citations

## License: unknown
https://github.com/patidarumesh112/pragetx_nodejs/tree/28209ba55b5e0128e132b1fbf03aabecb4801519/index.js

```
);
const cors = require('cors');
const productRoutes = require('./routes/product');
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/order');

const
```


## License: unknown
https://github.com/skursatToklucu/SimpleBlogPractice/tree/97ecc6186c9e858d69ef6fb431c3bcf04ede65d2/controllers/userController.js

```
;
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json
```


## License: unknown
https://github.com/Shivam-Moudgil/Dara/tree/7edbe175e236edfdad0829a17ccf7ea61326c05f/server/routes/auth.js

```
js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register);
router.post(
```


## License: unknown
https://github.com/Raghuvendhiran/Social_Media/tree/0986b95f1e4c28dab3a509a0e7c829d72e5e99a0/backend/routes/authRoutes.js

```
;
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);

module.
```

