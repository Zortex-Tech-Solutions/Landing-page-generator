# 🚀 Landing Page Generator with A/B Testing

A professional Python-based landing page generator featuring built-in A/B testing capabilities. Create, test, and optimize your landing pages with real-time analytics.

![Python](https://img.shields.io/badge/python-3.7+-blue.svg)
![Flask](https://img.shields.io/badge/flask-2.0+-green.svg)
![License](https://img.shields.io/badge/license-MIT-orange.svg)

## ✨ Features

- **Visual Editor Interface** - Intuitive controls for customizing both A/B test variants
- **Real-time A/B Testing** - Automatic 50/50 traffic split between variants
- **Analytics Dashboard** - Track views, clicks, and conversion rates in real-time
- **Live Preview** - See how your landing pages look before deployment
- **Export Ready Code** - Download production-ready Python Flask application
- **Responsive Design** - Mobile-friendly landing pages
- **Modern UI** - Sleek black design with orange highlights

## 🎯 What is A/B Testing?

A/B testing (also known as split testing) is a method of comparing two versions of a webpage to determine which one performs better. Visitors are randomly shown either version A or version B, and their interactions are tracked to identify the most effective design.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Python 3.7 or higher
- pip (Python package installer)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SYOP200/landing-page-generator.git
   cd landing-page-generator
   ```

2. **Create a virtual environment (recommended)**
   ```bash
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install flask
   ```

## 🚀 Quick Start

1. **Run the application**
   ```bash
   python landing_page_ab_test.py
   ```

2. **Open your browser**
   Navigate to `http://localhost:5000`

3. **View analytics**
   Visit `http://localhost:5000/analytics` to see real-time test results

## 📁 Project Structure

```
landing-page-generator/
│
├── landing_page_ab_test.py    # Main Flask application
├── README.md                    # This file
└── requirements.txt             # Python dependencies
```

## 🎨 Customization

### Editing Variants

Open `landing_page_ab_test.py` and modify the `variants` dictionary:

```python
variants = {
    'A': {
        'headline': 'Your Custom Headline',
        'subheadline': 'Your custom subheadline',
        'cta_text': 'Click Here',
        'cta_color': '#ff6b35'
    },
    'B': {
        'headline': 'Alternative Headline',
        'subheadline': 'Different subheadline',
        'cta_text': 'Get Started',
        'cta_color': '#ff8c42'
    }
}
```

### Changing Traffic Split

By default, traffic is split 50/50. To change this, modify the `landing_page()` function:

```python
# For 70/30 split (70% A, 30% B)
variant = random.choices(['A', 'B'], weights=[70, 30])[0]
```

## 📊 Understanding the Analytics

The analytics endpoint (`/analytics`) returns JSON data with:

- **views** - Total number of page views for each variant
- **clicks** - Number of CTA button clicks
- **conversion_rate** - Percentage of visitors who clicked (clicks/views × 100)

Example response:
```json
{
  "A": {
    "views": 1247,
    "clicks": 156,
    "conversion_rate": 12.51
  },
  "B": {
    "views": 1198,
    "clicks": 189,
    "conversion_rate": 15.78
  }
}
```

## 🔐 Production Deployment

For production use, consider:

1. **Use a production WSGI server**
   ```bash
   pip install gunicorn
   gunicorn -w 4 -b 0.0.0.0:5000 landing_page_ab_test:app
   ```

2. **Add a database** - Store analytics in PostgreSQL, MySQL, or SQLite instead of in-memory storage

3. **Implement session tracking** - Use cookies or sessions to ensure users see consistent variants

4. **Add environment variables** - Store configuration in `.env` files

5. **Enable HTTPS** - Use SSL certificates for secure connections

## 🛠️ Advanced Features

### Adding More Variants

Extend the system to test 3+ variants:

```python
variants = {
    'A': {...},
    'B': {...},
    'C': {...}
}

variant = random.choice(['A', 'B', 'C'])
```

### Statistical Significance

For reliable results, ensure:
- Minimum 100 conversions per variant
- At least 1-2 weeks of testing
- Consistent traffic patterns

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Troubleshooting

### Port Already in Use
If port 5000 is already in use:
```python
app.run(debug=True, host='0.0.0.0', port=8080)
```

### Analytics Not Updating
Make sure you're making actual page visits and clicking the CTA button. Refresh the `/analytics` endpoint to see updates.

### Module Not Found Error
Ensure Flask is installed in your active Python environment:
```bash
pip list | grep Flask
```

## 📚 Additional Resources

- [Flask Documentation](https://flask.palletsprojects.com/)
- [A/B Testing Best Practices](https://www.optimizely.com/optimization-glossary/ab-testing/)
- [Statistical Significance Calculator](https://www.optimizely.com/sample-size-calculator/)

## 👨‍💻 Author

SYOP200 - [@SYOP200](https://twitter.com/SYOP200)

Project Link: [https://github.com/SYOP200/landing-page-generator](https://github.com/SYOP200/landing-page-generator)

## 🙏 Acknowledgments

- Flask framework for the backend
- Modern web design principles
- A/B testing methodologies

---

**Made with ❤️ and Python**