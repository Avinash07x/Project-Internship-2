import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, Wand2 } from 'lucide-react';
import EsteemhostFAQ from '../../../components/EsteemhostFAQ';
import Testimonials from '../../../components/Testimonials';
import Hero80 from "../../../assets/17.png";

const NameSuggestionToolPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const generateSuggestions = () => {
        if (!keyword) return;
        const suffixes = ['hub', 'world', 'online', 'shop', 'now', 'pro', 'net', 'site', 'tech', 'digital'];
        const generated = suffixes.map(suffix => `${keyword}${suffix}.com`);
        setSuggestions(generated);
    };

    return (
        <div className="min-h-screen w-full bg-blue-100 overflow-hidden relative">
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
            </div>

            {/* Hero Section */}
            <section className="relative py-20 px-6 z-10">
                <div className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {/* Left Text Content */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block shadow-lg animate-pulse">
                            🔍 Smart Domain Finder
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                            DOMAIN NAME <br />
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                SUGGESTION TOOL
                            </span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-6 max-w-xl">
                            Instantly get creative domain name ideas based on your keyword.
                        </p>
                    </div>
                    {/* Right Image with Motion */}
                    <motion.div
                        className="flex-1 max-w-md mx-auto md:mx-0"
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        animate={isVisible ? { opacity: 1, x: 0, scale: [1, 1.03, 1] } : { opacity: 0, x: 50, scale: 0.95 }}
                        transition={{
                            duration: 3,
                            ease: 'easeOut',
                            scale: {
                                repeat: Infinity,
                                repeatType: 'loop',
                                duration: 3,
                                ease: 'easeInOut',
                            },
                        }}
                    >
                        <img
                            src={Hero80}
                            alt="Domain Suggestion Tool"
                            className="w-full h-auto max-h-[480px] object-contain animate-gentle-bounce"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Suggestion Tool */}
            <section className="py-20 px-6 relative z-10 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white/80 p-6 rounded-2xl shadow-lg border border-blue-200/50">
                        <h2 className="text-2xl font-bold mb-6 text-slate-800 flex justify-center items-center gap-2">
                            <Sparkles className="w-6 h-6 text-blue-500" /> Enter a keyword to begin:
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <input
                                type="text"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                placeholder="e.g. fashion, tech, biz"
                                className="w-full sm:w-2/3 px-6 py-4 text-lg rounded-xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <button
                                onClick={generateSuggestions}
                                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all hover:scale-105"
                            >
                                Suggest Names <Wand2 className="w-5 h-5 inline ml-2" />
                            </button>
                        </div>
                        {suggestions.length > 0 && (
                            <div className="mt-10 text-left">
                                <h3 className="text-xl font-semibold text-slate-800 mb-4">Suggested Domains:</h3>
                                <ul className="space-y-3">
                                    {suggestions.map((name, idx) => (
                                        <li key={idx} className="p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition cursor-pointer">
                                            {name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 backdrop-blur-sm z-10 relative text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-slate-800 mb-6">
                        Found a Great Name?
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Secure it now before someone else does!
                    </p>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg">
                        Register Domain <Search className="w-5 h-5 inline ml-2" />
                    </button>
                </div>
            </section>

            <EsteemhostFAQ />
            <Testimonials />
        </div>
    );
};

export default NameSuggestionToolPage;



// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Search, Sparkles, Wand2, Copy, Check, Globe, Star, Zap, Filter, RefreshCw, Heart } from 'lucide-react';

// const NameSuggestionToolPage = () => {
//     const [isVisible, setIsVisible] = useState(false);
//     const [keyword, setKeyword] = useState('');
//     const [suggestions, setSuggestions] = useState([]);
//     const [copiedIndex, setCopiedIndex] = useState(null);
//     const [category, setCategory] = useState('all');
//     const [isGenerating, setIsGenerating] = useState(false);
//     const [favorites, setFavorites] = useState([]);

//     useEffect(() => {
//         setIsVisible(true);
//     }, []);

//     const domainCategories = {
//         all: {
//             suffixes: ['hub', 'world', 'online', 'shop', 'now', 'pro', 'net', 'site', 'tech', 'digital', 'zone', 'space', 'cloud', 'studio', 'lab', 'works', 'solutions', 'central', 'express', 'direct'],
//             prefixes: ['smart', 'super', 'ultra', 'mega', 'top', 'best', 'quick', 'fast', 'easy', 'my', 'the', 'go', 'pro', 'elite', 'prime', 'max', 'next', 'new', 'live']
//         },
//         business: {
//             suffixes: ['corp', 'biz', 'company', 'group', 'ventures', 'solutions', 'services', 'consulting', 'partners', 'enterprise'],
//             prefixes: ['smart', 'pro', 'elite', 'prime', 'top', 'best', 'global', 'united', 'first', 'premium']
//         },
//         tech: {
//             suffixes: ['tech', 'digital', 'cloud', 'app', 'soft', 'systems', 'labs', 'code', 'dev', 'ai'],
//             prefixes: ['smart', 'cyber', 'digital', 'tech', 'web', 'cloud', 'data', 'code', 'dev', 'byte']
//         },
//         creative: {
//             suffixes: ['studio', 'design', 'creative', 'art', 'media', 'graphics', 'visual', 'craft', 'works', 'gallery'],
//             prefixes: ['creative', 'design', 'art', 'visual', 'pixel', 'color', 'bright', 'vivid', 'bold', 'fresh']
//         },
//         ecommerce: {
//             suffixes: ['shop', 'store', 'mart', 'market', 'buy', 'sale', 'deals', 'outlet', 'plaza', 'bazaar'],
//             prefixes: ['shop', 'buy', 'quick', 'easy', 'best', 'top', 'mega', 'super', 'express', 'direct']
//         }
//     };

//     const generateSuggestions = async () => {
//         if (!keyword) return;
        
//         setIsGenerating(true);
//         setSuggestions([]);
        
//         // Simulate API delay for better UX
//         await new Promise(resolve => setTimeout(resolve, 1000));
        
//         const categoryData = domainCategories[category];
//         const generated = [];
        
//         // Generate suffix combinations
//         categoryData.suffixes.forEach(suffix => {
//             generated.push({
//                 name: `${keyword}${suffix}.com`,
//                 type: 'suffix',
//                 available: Math.random() > 0.3
//             });
//         });
        
//         // Generate prefix combinations
//         categoryData.prefixes.forEach(prefix => {
//             generated.push({
//                 name: `${prefix}${keyword}.com`,
//                 type: 'prefix',
//                 available: Math.random() > 0.3
//             });
//         });
        
//         // Generate creative combinations
//         const creativeWords = ['zone', 'spot', 'base', 'point', 'link', 'wave', 'flow', 'path', 'bridge', 'gate'];
//         creativeWords.forEach(word => {
//             generated.push({
//                 name: `${keyword}${word}.com`,
//                 type: 'creative',
//                 available: Math.random() > 0.4
//             });
//         });
        
//         // Shuffle and limit results
//         const shuffled = generated.sort(() => 0.5 - Math.random()).slice(0, 15);
//         setSuggestions(shuffled);
//         setIsGenerating(false);
//     };

//     const copyToClipboard = async (text, index) => {
//         try {
//             await navigator.clipboard.writeText(text);
//             setCopiedIndex(index);
//             setTimeout(() => setCopiedIndex(null), 2000);
//         } catch (err) {
//             console.error('Failed to copy text: ', err);
//         }
//     };

//     const toggleFavorite = (suggestion, index) => {
//         const isFavorited = favorites.some(fav => fav.name === suggestion.name);
//         if (isFavorited) {
//             setFavorites(favorites.filter(fav => fav.name !== suggestion.name));
//         } else {
//             setFavorites([...favorites, { ...suggestion, index }]);
//         }
//     };

//     const isFavorited = (name) => favorites.some(fav => fav.name === name);

//     return (
//         <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden relative">
//             {/* Enhanced Background Animation */}
//             <div className="absolute inset-0 overflow-hidden z-0">
//                 <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
//                 <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-200/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '40s', animationDirection: 'reverse' }}></div>
//                 <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-300/10 rounded-full animate-pulse"></div>
//                 <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-300/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
//             </div>

//             {/* Hero Section */}
//             <section className="relative py-20 px-6 z-10">
//                 <div className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//                     {/* Left Text Content */}
//                     <div className="flex-1 text-center md:text-left">
//                         <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 inline-block shadow-lg animate-pulse">
//                             <Globe className="w-4 h-4 inline mr-2" />
//                             AI-Powered Domain Generator
//                         </div>
//                         <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
//                             SMART DOMAIN <br />
//                             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//                                 NAME GENERATOR
//                             </span>
//                         </h1>
//                         <p className="text-xl text-slate-600 mb-8 max-w-xl">
//                             Generate hundreds of creative domain names instantly with our advanced AI-powered tool. 
//                             Find the perfect domain for your business, project, or idea.
//                         </p>
//                     </div>

//                     {/* Right Image with Motion */}
//                     <motion.div
//                         className="flex-1 max-w-md mx-auto md:mx-0"
//                         initial={{ opacity: 0, x: 50, scale: 0.95 }}
//                         animate={isVisible ? { opacity: 1, x: 0, scale: [1, 1.03, 1] } : { opacity: 0, x: 50, scale: 0.95 }}
//                         transition={{
//                             duration: 3,
//                             ease: 'easeOut',
//                             scale: {
//                                 repeat: Infinity,
//                                 repeatType: 'loop',
//                                 duration: 3,
//                                 ease: 'easeInOut',
//                             },
//                         }}
//                     >
//                         <div className="relative">
//                             <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl animate-pulse"></div>
//                             <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-2xl">
//                                 <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-2xl text-white text-center">
//                                     <Globe className="w-16 h-16 mx-auto mb-4 animate-spin" style={{ animationDuration: '10s' }} />
//                                     <h3 className="text-2xl font-bold mb-2">Domain Tool</h3>
//                                     <p className="text-blue-100 mb-4">Generate Perfect Names</p>
//                                     <div className="space-y-2">
//                                         <div className="bg-white/20 p-2 rounded-lg text-sm">example.com</div>
//                                         <div className="bg-white/20 p-2 rounded-lg text-sm">mysite.net</div>
//                                         <div className="bg-white/20 p-2 rounded-lg text-sm">startup.io</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Enhanced Search Tool */}
//             <section className="py-20 px-6 relative z-10">
//                 <div className="max-w-5xl mx-auto">
//                     <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-blue-200/50">
//                         <div className="text-center mb-8">
//                             <h2 className="text-3xl font-bold text-slate-800 flex justify-center items-center gap-3 mb-4">
//                                 <Sparkles className="w-8 h-8 text-blue-500" /> 
//                                 Generate Domain Names
//                             </h2>
//                             <p className="text-slate-600">Enter a keyword and select a category to get started</p>
//                         </div>

//                         {/* Category Filter */}
//                         <div className="mb-8">
//                             <label className="block text-sm font-semibold text-slate-700 mb-3">
//                                 <Filter className="w-4 h-4 inline mr-2" />
//                                 Choose Category:
//                             </label>
//                             <div className="flex flex-wrap gap-2">
//                                 {Object.keys(domainCategories).map((cat) => (
//                                     <button
//                                         key={cat}
//                                         onClick={() => setCategory(cat)}
//                                         className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                                             category === cat 
//                                                 ? 'bg-blue-500 text-white shadow-lg' 
//                                                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                                         }`}
//                                     >
//                                         {cat.charAt(0).toUpperCase() + cat.slice(1)}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Search Input */}
//                         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
//                             <input
//                                 type="text"
//                                 value={keyword}
//                                 onChange={(e) => setKeyword(e.target.value)}
//                                 placeholder="e.g. fashion, tech, travel, food"
//                                 className="w-full sm:w-2/3 px-6 py-4 text-lg rounded-2xl border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
//                                 onKeyPress={(e) => e.key === 'Enter' && generateSuggestions()}
//                             />
//                             <button
//                                 onClick={generateSuggestions}
//                                 disabled={isGenerating || !keyword}
//                                 className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//                             >
//                                 {isGenerating ? (
//                                     <>
//                                         <RefreshCw className="w-5 h-5 animate-spin" />
//                                         Generating...
//                                     </>
//                                 ) : (
//                                     <>
//                                         <Wand2 className="w-5 h-5" />
//                                         Generate Names
//                                     </>
//                                 )}
//                             </button>
//                         </div>

//                         {/* Loading Animation */}
//                         {isGenerating && (
//                             <div className="text-center py-8">
//                                 <div className="inline-flex items-center gap-2 text-blue-500">
//                                     <Zap className="w-6 h-6 animate-pulse" />
//                                     <span className="text-lg font-medium">Generating amazing domain names...</span>
//                                 </div>
//                             </div>
//                         )}

//                         {/* Results */}
//                         {suggestions.length > 0 && !isGenerating && (
//                             <div className="mt-10">
//                                 <div className="flex items-center justify-between mb-6">
//                                     <h3 className="text-2xl font-bold text-slate-800">
//                                         Domain Suggestions ({suggestions.length})
//                                     </h3>
//                                     <div className="flex items-center gap-2 text-sm text-slate-600">
//                                         <div className="flex items-center gap-1">
//                                             <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                                             Available
//                                         </div>
//                                         <div className="flex items-center gap-1">
//                                             <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                                             Taken
//                                         </div>
//                                     </div>
//                                 </div>
                                
//                                 <div className="grid gap-3">
//                                     {suggestions.map((suggestion, idx) => (
//                                         <div 
//                                             key={idx} 
//                                             className={`p-4 rounded-xl border-2 transition-all hover:shadow-lg ${
//                                                 suggestion.available 
//                                                     ? 'bg-green-50 border-green-200 hover:bg-green-100' 
//                                                     : 'bg-red-50 border-red-200 hover:bg-red-100'
//                                             }`}
//                                         >
//                                             <div className="flex items-center justify-between">
//                                                 <div className="flex items-center gap-3">
//                                                     <div className={`w-3 h-3 rounded-full ${
//                                                         suggestion.available ? 'bg-green-500' : 'bg-red-500'
//                                                     }`}></div>
//                                                     <span className="font-semibold text-lg text-slate-800">
//                                                         {suggestion.name}
//                                                     </span>
//                                                     <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                                                         suggestion.type === 'suffix' ? 'bg-blue-100 text-blue-800' :
//                                                         suggestion.type === 'prefix' ? 'bg-purple-100 text-purple-800' :
//                                                         'bg-orange-100 text-orange-800'
//                                                     }`}>
//                                                         {suggestion.type}
//                                                     </span>
//                                                 </div>
//                                                 <div className="flex items-center gap-2">
//                                                     <button
//                                                         onClick={() => toggleFavorite(suggestion, idx)}
//                                                         className={`p-2 rounded-full transition-all ${
//                                                             isFavorited(suggestion.name) 
//                                                                 ? 'text-red-500 hover:bg-red-50' 
//                                                                 : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
//                                                         }`}
//                                                     >
//                                                         <Heart className={`w-5 h-5 ${isFavorited(suggestion.name) ? 'fill-current' : ''}`} />
//                                                     </button>
//                                                     <button
//                                                         onClick={() => copyToClipboard(suggestion.name, idx)}
//                                                         className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
//                                                     >
//                                                         {copiedIndex === idx ? (
//                                                             <Check className="w-5 h-5 text-green-500" />
//                                                         ) : (
//                                                             <Copy className="w-5 h-5" />
//                                                         )}
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}

//                         {/* Favorites Section */}
//                         {favorites.length > 0 && (
//                             <div className="mt-10 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border border-purple-200">
//                                 <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
//                                     <Heart className="w-5 h-5 text-red-500 fill-current" />
//                                     Your Favorites ({favorites.length})
//                                 </h3>
//                                 <div className="grid gap-2">
//                                     {favorites.map((fav, idx) => (
//                                         <div key={idx} className="flex items-center justify-between p-3 bg-white/70 rounded-lg">
//                                             <span className="font-medium text-slate-800">{fav.name}</span>
//                                             <button
//                                                 onClick={() => toggleFavorite(fav, idx)}
//                                                 className="p-1 rounded-full text-red-500 hover:bg-red-50 transition-all"
//                                             >
//                                                 <Heart className="w-4 h-4 fill-current" />
//                                             </button>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </section>

//             {/* Enhanced CTA Section */}
//             <section className="py-20 px-6 relative z-10">
//                 <div className="max-w-4xl mx-auto text-center">
//                     <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-12 rounded-3xl text-white shadow-2xl">
//                         <h2 className="text-4xl font-bold mb-6">
//                             Ready to Claim Your Domain?
//                         </h2>
//                         <p className="text-xl mb-8 opacity-90">
//                             Don't let your perfect domain slip away! Register it now and start building your online presence.
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                             <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
//                                 <Search className="w-5 h-5" />
//                                 Check Availability
//                             </button>
//                             <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
//                                 <Star className="w-5 h-5" />
//                                 Get Premium
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default NameSuggestionToolPage;