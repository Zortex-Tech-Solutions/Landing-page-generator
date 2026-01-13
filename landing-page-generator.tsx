import React, { useState } from 'react';
import { Download, Eye, BarChart3, Copy, Check, Play, Pause } from 'lucide-react';

const LandingPageGenerator = () => {
  const [activeTab, setActiveTab] = useState('editor');
  const [variantA, setVariantA] = useState({
    headline: 'Transform Your Business Today',
    subheadline: 'Discover the power of our innovative solution',
    ctaText: 'Get Started Free',
    ctaColor: '#ff6b35'
  });
  const [variantB, setVariantB] = useState({
    headline: 'Revolutionize Your Workflow',
    subheadline: 'Join thousands of satisfied customers',
    ctaText: 'Start Your Free Trial',
    ctaColor: '#ff8c42'
  });
  const [testResults, setTestResults] = useState({
    variantA: { views: #, clicks: #, conversion: # },
    variantB: { views: #, clicks: #, conversion: # }
  });
  const [isTestRunning, setIsTestRunning] = useState(true);
  const [copied, setCopied] = useState(false);
  const [previewVariant, setPreviewVariant] = useState('A');

  const generatePythonCode = () => {
    return `from flask import Flask, render_template_string, request, jsonify
import random
from datetime import datetime

app = Flask(__name__)

# A/B Test Configuration
variants = {
    'A': {
        'headline': '${variantA.headline}',
        'subheadline': '${variantA.subheadline}',
        'cta_text': '${variantA.ctaText}',
        'cta_color': '${variantA.ctaColor}'
    },
    'B': {
        'headline': '${variantB.headline}',
        'subheadline': '${variantB.subheadline}',
        'cta_text': '${variantB.ctaText}',
        'cta_color': '${variantB.ctaColor}'
    }
}

# Analytics storage
analytics = {'A': {'views': 0, 'clicks': 0}, 'B': {'views': 0, 'clicks': 0}}

HTML_TEMPLATE = '''
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page - Variant {{ variant }}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            color: #ffffff;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            text-align: center;
            padding: 60px 20px;
            max-width: 800px;
        }
        h1 {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        p {
            font-size: 1.5rem;
            color: #b0b0b0;
            margin-bottom: 40px;
        }
        .cta-button {
            background: {{ cta_color }};
            color: white;
            border: none;
            padding: 18px 48px;
            font-size: 1.2rem;
            font-weight: 600;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
        }
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 40px rgba(255, 107, 53, 0.4);
        }
        .variant-badge {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ff6b35;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="variant-badge">Variant {{ variant }}</div>
    <div class="container">
        <h1>{{ headline }}</h1>
        <p>{{ subheadline }}</p>
        <button class="cta-button" onclick="trackClick()">{{ cta_text }}</button>
    </div>
    <script>
        function trackClick() {
            fetch('/track-click', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({variant: '{{ variant }}'})
            });
            alert('Thank you for your interest!');
        }
    </script>
</body>
</html>
'''

@app.route('/')
def landing_page():
    # Randomly assign variant (50/50 split)
    variant = random.choice(['A', 'B'])
    analytics[variant]['views'] += 1
    
    config = variants[variant]
    return render_template_string(
        HTML_TEMPLATE,
        variant=variant,
        headline=config['headline'],
        subheadline=config['subheadline'],
        cta_text=config['cta_text'],
        cta_color=config['cta_color']
    )

@app.route('/track-click', methods=['POST'])
def track_click():
    data = request.json
    variant = data.get('variant')
    if variant in analytics:
        analytics[variant]['clicks'] += 1
    return jsonify({'status': 'success'})

@app.route('/analytics')
def get_analytics():
    results = {}
    for variant, data in analytics.items():
        conversion = (data['clicks'] / data['views'] * 100) if data['views'] > 0 else 0
        results[variant] = {
            'views': data['views'],
            'clicks': data['clicks'],
            'conversion_rate': round(conversion, 2)
        }
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatePythonCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCode = () => {
    const blob = new Blob([generatePythonCode()], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'landing_page_ab_test.py';
    a.click();
  };

  const currentVariant = previewVariant === 'A' ? variantA : variantB;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Landing Page Generator
          </h1>
          <p className="text-gray-400 mt-1">Professional A/B Testing Suite</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-800 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1">
            {['editor', 'preview', 'analytics', 'code'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium capitalize transition-all ${
                  activeTab === tab
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Editor Tab */}
        {activeTab === 'editor' && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Variant A */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-orange-500">Variant A</h2>
                <span className="text-sm text-gray-400">Control</span>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Headline</label>
                  <input
                    type="text"
                    value={variantA.headline}
                    onChange={(e) => setVariantA({...variantA, headline: e.target.value})}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subheadline</label>
                  <input
                    type="text"
                    value={variantA.subheadline}
                    onChange={(e) => setVariantA({...variantA, subheadline: e.target.value})}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">CTA Text</label>
                  <input
                    type="text"
                    value={variantA.ctaText}
                    onChange={(e) => setVariantA({...variantA, ctaText: e.target.value})}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">CTA Color</label>
                  <input
                    type="color"
                    value={variantA.ctaColor}
                    onChange={(e) => setVariantA({...variantA, ctaColor: e.target.value})}
                    className="w-full h-12 bg-gray-900 border border-gray-700 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Variant B */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-orange-500">Variant B</h2>
                <span className="text-sm text-gray-400">Test</span>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Headline</label>
                  <input
                    type="text"
                    value={variantB.headline}
                    onChange={(e) => setVariantB({...variantB, headline: e.target.value})}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subheadline</label>
                  <input
                    type="text"
                    value={variantB.subheadline}
                    onChange={(e) => setVariantB({...variantB, subheadline: e.target.value})}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">CTA Text</label>
                  <input
                    type="text"
                    value={variantB.ctaText}
                    onChange={(e) => setVariantB({...variantB, ctaText: e.target.value})}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">CTA Color</label>
                  <input
                    type="color"
                    value={variantB.ctaColor}
                    onChange={(e) => setVariantB({...variantB, ctaColor: e.target.value})}
                    className="w-full h-12 bg-gray-900 border border-gray-700 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Preview Tab */}
        {activeTab === 'preview' && (
          <div>
            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={() => setPreviewVariant('A')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  previewVariant === 'A'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                Variant A
              </button>
              <button
                onClick={() => setPreviewVariant('B')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  previewVariant === 'B'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                Variant B
              </button>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-12 border border-gray-700 min-h-[500px] flex items-center justify-center">
              <div className="text-center max-w-2xl">
                <div className="absolute top-8 right-8 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Variant {previewVariant}
                </div>
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  {currentVariant.headline}
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                  {currentVariant.subheadline}
                </p>
                <button
                  style={{ backgroundColor: currentVariant.ctaColor }}
                  className="px-12 py-4 text-lg font-semibold rounded-full text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                >
                  {currentVariant.ctaText}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">A/B Test Results</h2>
              <button
                onClick={() => setIsTestRunning(!isTestRunning)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                  isTestRunning ? 'bg-orange-500' : 'bg-gray-700'
                }`}
              >
                {isTestRunning ? <Pause size={18} /> : <Play size={18} />}
                {isTestRunning ? 'Running' : 'Paused'}
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Variant A Stats */}
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-orange-500 mb-4">Variant A</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Total Views</span>
                    <span className="text-2xl font-bold">{testResults.variantA.views}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Clicks</span>
                    <span className="text-2xl font-bold">{testResults.variantA.clicks}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Conversion Rate</span>
                    <span className="text-2xl font-bold text-orange-500">
                      {testResults.variantA.conversion}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Variant B Stats */}
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-orange-500 mb-4">Variant B</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Total Views</span>
                    <span className="text-2xl font-bold">{testResults.variantB.views}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Clicks</span>
                    <span className="text-2xl font-bold">{testResults.variantB.clicks}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Conversion Rate</span>
                    <span className="text-2xl font-bold text-green-500">
                      {testResults.variantB.conversion}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-green-900/20 border border-green-700 rounded-xl p-6">
              <h4 className="text-lg font-bold text-green-500 mb-2">Winner: Variant B</h4>
              <p className="text-gray-300">
                Variant B is outperforming Variant A with a {(testResults.variantB.conversion - testResults.variantA.conversion).toFixed(1)}% higher conversion rate.
              </p>
            </div>
          </div>
        )}

        {/* Code Tab */}
        {activeTab === 'code' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Python Flask Application</h2>
              <div className="flex gap-2">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg font-medium transition-all"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
                <button
                  onClick={downloadCode}
                  className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-medium transition-all"
                >
                  <Download size={18} />
                  Download
                </button>
              </div>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 overflow-x-auto">
              <pre className="text-sm text-gray-300 font-mono whitespace-pre">
                {generatePythonCode()}
              </pre>
            </div>
            <div className="mt-6 bg-blue-900/20 border border-blue-700 rounded-xl p-6">
              <h4 className="text-lg font-bold text-blue-400 mb-2">Setup Instructions</h4>
              <ol className="text-gray-300 space-y-2 list-decimal list-inside">
                <li>Install Flask: <code className="bg-gray-800 px-2 py-1 rounded">pip install flask</code></li>
                <li>Save the code as <code className="bg-gray-800 px-2 py-1 rounded">landing_page_ab_test.py</code></li>
                <li>Run: <code className="bg-gray-800 px-2 py-1 rounded">python landing_page_ab_test.py</code></li>
                <li>Open your browser to <code className="bg-gray-800 px-2 py-1 rounded">http://localhost:5000</code></li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPageGenerator;
