(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_1ffdd6._.js", {

"[project]/lib/hooks/use-scroll-anchor.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useScrollAnchor": ()=>useScrollAnchor
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.6_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
;
const useScrollAnchor = ()=>{
    _s();
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const visibilityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isAtBottom, setIsAtBottom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const scrollToBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (messagesRef.current) {
            messagesRef.current.scrollIntoView({
                block: 'end',
                behavior: 'smooth'
            });
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (messagesRef.current) {
            if (isAtBottom && !isVisible) {
                messagesRef.current.scrollIntoView({
                    block: 'end'
                });
            }
        }
    }, [
        isAtBottom,
        isVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const { current } = scrollRef;
        if (current) {
            const handleScroll = (event)=>{
                const target = event.target;
                const offset = 25;
                const isAtBottom = target.scrollTop + target.clientHeight >= target.scrollHeight - offset;
                setIsAtBottom(isAtBottom);
            };
            current.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ()=>{
                current.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (visibilityRef.current) {
            let observer = new IntersectionObserver((entries)=>{
                entries.forEach((entry)=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            }, {
                rootMargin: '0px 0px -150px 0px'
            });
            observer.observe(visibilityRef.current);
            return ()=>{
                observer.disconnect();
            };
        }
    });
    return {
        messagesRef,
        scrollRef,
        visibilityRef,
        scrollToBottom,
        isAtBottom,
        isVisible
    };
};
_s(useScrollAnchor, "kcELlIAUeXCyJOfbDblqwcx7ATQ=");

})()),
"[project]/components/chat.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Chat": ()=>Chat
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.6_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/chat-list.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/chat-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$empty$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/empty-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$local$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/hooks/use-local-storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.6_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$3$2e$3$2e$17_openai$40$4$2e$56$2e$0_zod$40$3$2e$23$2e$8_$5f$react$40$18$2e$3$2e$1_sswr$40$2$2e$1$2e$0_svelte$40$4$2e$2$2e$19_$5f$svelte$40$4$2e$2$2e$19_vue$40$_wrejqlrui2gdliogi74j4qbrna$2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/ai@3.3.17_openai@4.56.0_zod@3.23.8__react@18.3.1_sswr@2.1.0_svelte@4.2.19__svelte@4.2.19_vue@_wrejqlrui2gdliogi74j4qbrna/node_modules/ai/rsc/dist/rsc-shared.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.6_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$scroll$2d$anchor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/hooks/use-scroll-anchor.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
;
function Chat({ id, className, session, missingKeys }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [messages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$3$2e$3$2e$17_openai$40$4$2e$56$2e$0_zod$40$3$2e$23$2e$8_$5f$react$40$18$2e$3$2e$1_sswr$40$2$2e$1$2e$0_svelte$40$4$2e$2$2e$19_$5f$svelte$40$4$2e$2$2e$19_vue$40$_wrejqlrui2gdliogi74j4qbrna$2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUIState"])();
    const [aiState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$3$2e$3$2e$17_openai$40$4$2e$56$2e$0_zod$40$3$2e$23$2e$8_$5f$react$40$18$2e$3$2e$1_sswr$40$2$2e$1$2e$0_svelte$40$4$2e$2$2e$19_$5f$svelte$40$4$2e$2$2e$19_vue$40$_wrejqlrui2gdliogi74j4qbrna$2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAIState"])();
    const [_, setNewChatId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$local$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"])('newChatId', id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (session?.user) {
            if (!path.includes('chat') && messages.length === 1) {
                window.history.replaceState({}, '', `/chat/${id}`);
            }
        }
    }, [
        id,
        path,
        session?.user,
        messages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const messagesLength = aiState.messages?.length;
        if (messagesLength === 2) {
            router.refresh();
        }
    }, [
        aiState.messages,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setNewChatId(id);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        missingKeys.map((key)=>{
        // toast.error(`Missing ${key} environment variable!`)
        // toast.error(`Missing ${key} environment variable!`)
        });
    }, [
        missingKeys
    ]);
    const { messagesRef, scrollRef, visibilityRef, isAtBottom, scrollToBottom } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$scroll$2d$anchor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnchor"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group w-full overflow-auto pl-0 peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]",
        ref: scrollRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('pb-[200px] pt-4 md:pt-10', className),
                ref: messagesRef,
                children: [
                    messages.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatList"], {
                        messages: messages,
                        isShared: false,
                        session: session
                    }, void 0, false, {
                        fileName: "[project]/components/chat.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$empty$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyScreen"], {}, void 0, false, {
                        fileName: "[project]/components/chat.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-px",
                        ref: visibilityRef
                    }, void 0, false, {
                        fileName: "[project]/components/chat.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/chat.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatPanel"], {
                id: id,
                input: input,
                setInput: setInput,
                isAtBottom: isAtBottom,
                scrollToBottom: scrollToBottom
            }, void 0, false, {
                fileName: "[project]/components/chat.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/chat.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(Chat, "btlVe6HWb8m3HA8r4lHRl3lVbcs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$3$2e$3$2e$17_openai$40$4$2e$56$2e$0_zod$40$3$2e$23$2e$8_$5f$react$40$18$2e$3$2e$1_sswr$40$2$2e$1$2e$0_svelte$40$4$2e$2$2e$19_$5f$svelte$40$4$2e$2$2e$19_vue$40$_wrejqlrui2gdliogi74j4qbrna$2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUIState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$3$2e$3$2e$17_openai$40$4$2e$56$2e$0_zod$40$3$2e$23$2e$8_$5f$react$40$18$2e$3$2e$1_sswr$40$2$2e$1$2e$0_svelte$40$4$2e$2$2e$19_$5f$svelte$40$4$2e$2$2e$19_vue$40$_wrejqlrui2gdliogi74j4qbrna$2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAIState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$local$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$scroll$2d$anchor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnchor"]
    ];
});
_c = Chat;
var _c;
__turbopack_refresh__.register(_c, "Chat");

})()),
"[project]/components/stocks/stock-skeleton.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "StockSkeleton": ()=>StockSkeleton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.6_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const StockSkeleton = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-green-400",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "float-right inline-block w-fit rounded-full bg-zinc-700 px-2 py-1 text-xs text-transparent",
                children: "xxxxxxx"
            }, void 0, false, {
                fileName: "[project]/components/stocks/stock-skeleton.tsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1 w-fit rounded-md bg-zinc-700 text-lg text-transparent",
                children: "xxxx"
            }, void 0, false, {
                fileName: "[project]/components/stocks/stock-skeleton.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-fit rounded-md bg-zinc-700 text-3xl font-bold text-transparent",
                children: "xxxx"
            }, void 0, false, {
                fileName: "[project]/components/stocks/stock-skeleton.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text mt-1 w-fit rounded-md bg-zinc-700 text-xs text-transparent",
                children: "xxxxxx xxx xx xxxx xx xxx"
            }, void 0, false, {
                fileName: "[project]/components/stocks/stock-skeleton.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative -mx-4 cursor-col-resize",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: 146
                    }
                }, void 0, false, {
                    fileName: "[project]/components/stocks/stock-skeleton.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/stocks/stock-skeleton.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/stocks/stock-skeleton.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
};
_c = StockSkeleton;
var _c;
__turbopack_refresh__.register(_c, "StockSkeleton");

})()),
"[project]/components/stocks/stocks-skeleton.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "StocksSkeleton": ()=>StocksSkeleton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.6_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const StocksSkeleton = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4 flex flex-col gap-2 overflow-y-scroll pb-4 text-sm sm:flex-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-[60px] w-full cursor-pointer flex-row gap-2 rounded-lg bg-zinc-800 p-2 text-left hover:bg-zinc-800 sm:w-[208px]"
            }, void 0, false, {
                fileName: "[project]/components/stocks/stocks-skeleton.tsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-[60px] w-full cursor-pointer flex-row gap-2 rounded-lg bg-zinc-800 p-2 text-left hover:bg-zinc-800 sm:w-[208px]"
            }, void 0, false, {
                fileName: "[project]/components/stocks/stocks-skeleton.tsx",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-[60px] w-full cursor-pointer flex-row gap-2 rounded-lg bg-zinc-800 p-2 text-left hover:bg-zinc-800 sm:w-[208px]"
            }, void 0, false, {
                fileName: "[project]/components/stocks/stocks-skeleton.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/stocks/stocks-skeleton.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
};
_c = StocksSkeleton;
var _c;
__turbopack_refresh__.register(_c, "StocksSkeleton");

})()),
"[project]/components/stocks/events-skeleton.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "EventsSkeleton": ()=>EventsSkeleton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.6_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const placeholderEvents = [
    {
        date: '2022-10-01',
        headline: 'NVIDIA releases new AI-powered graphics card',
        description: 'NVIDIA unveils the latest graphics card infused with AI capabilities, revolutionizing gaming and rendering experiences.'
    }
];
const EventsSkeleton = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "-mt-2 flex w-full flex-col gap-2 py-4",
        children: placeholderEvents.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex shrink-0 flex-col gap-1 rounded-lg bg-zinc-800 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-fit rounded-md bg-zinc-700 text-sm text-transparent",
                        children: event.date
                    }, void 0, false, {
                        fileName: "[project]/components/stocks/events-skeleton.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-fit rounded-md bg-zinc-700 text-transparent",
                        children: event.headline
                    }, void 0, false, {
                        fileName: "[project]/components/stocks/events-skeleton.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-auto rounded-md bg-zinc-700 text-transparent",
                        children: [
                            event.description.slice(0, 70),
                            "..."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/stocks/events-skeleton.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                ]
            }, event.date, true, {
                fileName: "[project]/components/stocks/events-skeleton.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/stocks/events-skeleton.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
_c = EventsSkeleton;
var _c;
__turbopack_refresh__.register(_c, "EventsSkeleton");

})()),
"[project]/components/stocks/spinner.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "spinner": ()=>spinner
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.6_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
const spinner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    xmlns: "http://www.w3.org/2000/svg",
    className: "size-5 animate-spin stroke-zinc-400",
    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12"
    }, void 0, false, {
        fileName: "[project]/components/stocks/spinner.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this)
}, void 0, false, {
    fileName: "[project]/components/stocks/spinner.tsx",
    lineNumber: 4,
    columnNumber: 3
}, this);

})()),
"[project]/components/ui/codeblock.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// Inspired by Chatbot-UI and modified to fit the needs of this project
// @see https://github.com/mckaywrigley/chatbot-ui/blob/main/components/Markdown/CodeBlock.tsx
__turbopack_esm__({
    "CodeBlock": ()=>CodeBlock,
    "generateRandomString": ()=>generateRandomString,
    "programmingLanguages": ()=>programmingLanguages
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.6_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.6_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$syntax$2d$highlighter$40$15$2e$5$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Prism$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/esm/prism.js [app-client] (ecmascript) <export default as Prism>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$syntax$2d$highlighter$40$15$2e$5$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$styles$2f$prism$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$copy$2d$to$2d$clipboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/hooks/use-copy-to-clipboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
const programmingLanguages = {
    javascript: '.js',
    python: '.py',
    java: '.java',
    c: '.c',
    cpp: '.cpp',
    'c++': '.cpp',
    'c#': '.cs',
    ruby: '.rb',
    php: '.php',
    swift: '.swift',
    'objective-c': '.m',
    kotlin: '.kt',
    typescript: '.ts',
    go: '.go',
    perl: '.pl',
    rust: '.rs',
    scala: '.scala',
    haskell: '.hs',
    lua: '.lua',
    shell: '.sh',
    sql: '.sql',
    html: '.html',
    css: '.css'
};
const generateRandomString = (length, lowercase = false)=>{
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXY3456789' // excluding similar looking characters like Z, 2, I, 1, O, 0
    ;
    let result = '';
    for(let i = 0; i < length; i++){
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return lowercase ? result.toLowerCase() : result;
};
const CodeBlock = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(({ language, value })=>{
    _s();
    const { isCopied, copyToClipboard } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$copy$2d$to$2d$clipboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCopyToClipboard"])({
        timeout: 2000
    });
    const downloadAsFile = ()=>{
        if (typeof window === 'undefined') {
            return;
        }
        const fileExtension = programmingLanguages[language] || '.file';
        const suggestedFileName = `file-${generateRandomString(3, true)}${fileExtension}`;
        // const fileName = window.prompt('Enter file name' || '', suggestedFileName)
        const fileName = window.prompt('Enter file name', suggestedFileName);
        if (!fileName) {
            // User pressed cancel on prompt.
            return;
        }
        const blob = new Blob([
            value
        ], {
            type: 'text/plain'
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = fileName;
        link.href = url;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };
    const onCopy = ()=>{
        if (isCopied) return;
        copyToClipboard(value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full font-sans codeblock bg-zinc-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between w-full px-6 py-2 pr-4 bg-zinc-800 text-zinc-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs lowercase",
                        children: language
                    }, void 0, false, {
                        fileName: "[project]/components/ui/codeblock.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                className: "hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",
                                onClick: downloadAsFile,
                                size: "icon",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconDownload"], {}, void 0, false, {
                                        fileName: "[project]/components/ui/codeblock.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "Download"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/codeblock.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/codeblock.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                className: "text-xs hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",
                                onClick: onCopy,
                                children: [
                                    isCopied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {}, void 0, false, {
                                        fileName: "[project]/components/ui/codeblock.tsx",
                                        lineNumber: 115,
                                        columnNumber: 25
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCopy"], {}, void 0, false, {
                                        fileName: "[project]/components/ui/codeblock.tsx",
                                        lineNumber: 115,
                                        columnNumber: 41
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "Copy code"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/codeblock.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/codeblock.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/codeblock.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/codeblock.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$syntax$2d$highlighter$40$15$2e$5$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Prism$3e$__["Prism"], {
                language: language,
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$syntax$2d$highlighter$40$15$2e$5$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$styles$2f$prism$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coldarkDark"],
                PreTag: "div",
                showLineNumbers: true,
                customStyle: {
                    margin: 0,
                    width: '100%',
                    background: 'transparent',
                    padding: '1.5rem 1rem'
                },
                lineNumberStyle: {
                    userSelect: 'none'
                },
                codeTagProps: {
                    style: {
                        fontSize: '0.9rem',
                        fontFamily: 'var(--font-mono)'
                    }
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/components/ui/codeblock.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/codeblock.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}, "2/Xp5dvGgc3DE1LEd1QNvpbEkfY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$copy$2d$to$2d$clipboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCopyToClipboard"]
    ];
})), "2/Xp5dvGgc3DE1LEd1QNvpbEkfY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$copy$2d$to$2d$clipboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCopyToClipboard"]
    ];
});
_c1 = CodeBlock;
CodeBlock.displayName = 'CodeBlock';
;
var _c, _c1;
__turbopack_refresh__.register(_c, "CodeBlock$memo");
__turbopack_refresh__.register(_c1, "CodeBlock");

})()),
"[project]/components/markdown.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MemoizedReactMarkdown": ()=>MemoizedReactMarkdown
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.6_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$8$2e$0$2e$7_$40$types$2b$react$40$18$2e$3$2e$4_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$react$2d$markdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactMarkdown__as__default$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-markdown@8.0.7_@types+react@18.3.4_react@18.3.1/node_modules/react-markdown/lib/react-markdown.js [app-client] (ecmascript) <export ReactMarkdown as default>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const MemoizedReactMarkdown = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$8$2e$0$2e$7_$40$types$2b$react$40$18$2e$3$2e$4_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$react$2d$markdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ReactMarkdown__as__default$3e$__["default"], (prevProps, nextProps)=>prevProps.children === nextProps.children && prevProps.className === nextProps.className);
_c = MemoizedReactMarkdown;
var _c;
__turbopack_refresh__.register(_c, "MemoizedReactMarkdown");

})()),
"[project]/lib/hooks/use-streamable-text.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useStreamableText": ()=>useStreamableText
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$3$2e$3$2e$17_openai$40$4$2e$56$2e$0_zod$40$3$2e$23$2e$8_$5f$react$40$18$2e$3$2e$1_sswr$40$2$2e$1$2e$0_svelte$40$4$2e$2$2e$19_$5f$svelte$40$4$2e$2$2e$19_vue$40$_wrejqlrui2gdliogi74j4qbrna$2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/ai@3.3.17_openai@4.56.0_zod@3.23.8__react@18.3.1_sswr@2.1.0_svelte@4.2.19__svelte@4.2.19_vue@_wrejqlrui2gdliogi74j4qbrna/node_modules/ai/rsc/dist/rsc-shared.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.6_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
;
;
const useStreamableText = (content)=>{
    _s();
    const [rawContent, setRawContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(typeof content === 'string' ? content : '');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (async ()=>{
            if (typeof content === 'object') {
                let value = '';
                for await (const delta of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$3$2e$3$2e$17_openai$40$4$2e$56$2e$0_zod$40$3$2e$23$2e$8_$5f$react$40$18$2e$3$2e$1_sswr$40$2$2e$1$2e$0_svelte$40$4$2e$2$2e$19_$5f$svelte$40$4$2e$2$2e$19_vue$40$_wrejqlrui2gdliogi74j4qbrna$2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readStreamableValue"])(content)){
                    if (typeof delta === 'string') {
                        setRawContent(value = value + delta);
                    }
                }
            }
        })();
    }, [
        content
    ]);
    return rawContent;
};
_s(useStreamableText, "AuZT3w9BIEV225zO0TMwN7Vdz1I=");

})()),
"[project]/components/stocks/message.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "BotCard": ()=>BotCard,
    "BotMessage": ()=>BotMessage,
    "SpinnerMessage": ()=>SpinnerMessage,
    "SystemMessage": ()=>SystemMessage,
    "UserMessage": ()=>UserMessage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.6_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/stocks/spinner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$codeblock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/codeblock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$markdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/markdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remark$2d$gfm$40$3$2e$0$2e$1$2f$node_modules$2f$remark$2d$gfm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/remark-gfm@3.0.1/node_modules/remark-gfm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remark$2d$math$40$5$2e$1$2e$1$2f$node_modules$2f$remark$2d$math$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/remark-math@5.1.1/node_modules/remark-math/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$streamable$2d$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/hooks/use-streamable-text.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
function UserMessage({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative flex items-start md:-ml-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border bg-background shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconUser"], {}, void 0, false, {
                    fileName: "[project]/components/stocks/message.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/stocks/message.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-4 flex-1 space-y-2 overflow-hidden pl-2",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/stocks/message.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/stocks/message.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = UserMessage;
function BotMessage({ content, className }) {
    _s();
    const text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$streamable$2d$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStreamableText"])(content);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group relative flex items-start md:-ml-12', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex size-[24px] shrink-0 select-none items-center justify-center rounded-md border bg-primary text-primary-foreground shadow-sm",
                children: "ASP"
            }, void 0, false, {
                fileName: "[project]/components/stocks/message.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-4 flex-1 space-y-2 overflow-hidden px-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$markdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MemoizedReactMarkdown"], {
                    className: "prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0",
                    remarkPlugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remark$2d$gfm$40$3$2e$0$2e$1$2f$node_modules$2f$remark$2d$gfm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remark$2d$math$40$5$2e$1$2e$1$2f$node_modules$2f$remark$2d$math$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                    ],
                    components: {
                        p ({ children }) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 last:mb-0",
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/components/stocks/message.tsx",
                                lineNumber: 48,
                                columnNumber: 22
                            }, void 0);
                        },
                        code ({ node, inline, className, children, ...props }) {
                            if (children.length) {
                                if (children[0] == '▍') {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-1 animate-pulse cursor-default",
                                        children: "▍"
                                    }, void 0, false, {
                                        fileName: "[project]/components/stocks/message.tsx",
                                        lineNumber: 54,
                                        columnNumber: 21
                                    }, void 0);
                                }
                                children[0] = children[0].replace('`▍`', '▍');
                            }
                            const match = /language-(\w+)/.exec(className || '');
                            if (inline) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    className: className,
                                    ...props,
                                    children: children
                                }, void 0, false, {
                                    fileName: "[project]/components/stocks/message.tsx",
                                    lineNumber: 65,
                                    columnNumber: 19
                                }, void 0);
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$codeblock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                                language: match && match[1] || '',
                                value: String(children).replace(/\n$/, ''),
                                ...props
                            }, Math.random(), false, {
                                fileName: "[project]/components/stocks/message.tsx",
                                lineNumber: 72,
                                columnNumber: 17
                            }, void 0);
                        }
                    },
                    children: text
                }, void 0, false, {
                    fileName: "[project]/components/stocks/message.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/stocks/message.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/stocks/message.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(BotMessage, "76nwQc+JDAIB4KGH8wCHmQco3Kc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$streamable$2d$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStreamableText"]
    ];
});
_c1 = BotMessage;
function BotCard({ children, showAvatar = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative flex items-start md:-ml-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex size-[24px] shrink-0 select-none items-center justify-center rounded-md border bg-primary text-primary-foreground shadow-sm', !showAvatar && 'invisible'),
                children: "ASP"
            }, void 0, false, {
                fileName: "[project]/components/stocks/message.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-4 flex-1 pl-2",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/stocks/message.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/stocks/message.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_c2 = BotCard;
function SystemMessage({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: 'mt-2 flex items-center justify-center gap-2 text-xs text-gray-500',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: 'max-w-[600px] flex-initial p-2',
            children: children
        }, void 0, false, {
            fileName: "[project]/components/stocks/message.tsx",
            lineNumber: 118,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/stocks/message.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_c3 = SystemMessage;
function SpinnerMessage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative flex items-start md:-ml-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex size-[24px] shrink-0 select-none items-center justify-center rounded-md border bg-primary text-primary-foreground shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconOpenAI"], {}, void 0, false, {
                    fileName: "[project]/components/stocks/message.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/stocks/message.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-4 h-[24px] flex flex-row items-center flex-1 space-y-2 overflow-hidden px-1",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spinner"]
            }, void 0, false, {
                fileName: "[project]/components/stocks/message.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/stocks/message.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_c4 = SpinnerMessage;
var _c, _c1, _c2, _c3, _c4;
__turbopack_refresh__.register(_c, "UserMessage");
__turbopack_refresh__.register(_c1, "BotMessage");
__turbopack_refresh__.register(_c2, "BotCard");
__turbopack_refresh__.register(_c3, "SystemMessage");
__turbopack_refresh__.register(_c4, "SpinnerMessage");

})()),
"[project]/components/stocks/index.tsx [app-client] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Events": ()=>Events,
    "Purchase": ()=>Purchase,
    "Stock": ()=>Stock,
    "Stocks": ()=>Stocks
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.6_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.6_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$stock$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/stocks/stock-skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$stocks$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/stocks/stocks-skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$events$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/stocks/events-skeleton.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
;
const Stock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c = ()=>__turbopack_require__("[project]/components/stocks/stock.tsx [app-client] (ecmascript, async loader)")(__turbopack_import__).then((mod)=>mod.Stock), {
    loadableGenerated: {
        modules: [
            "components/stocks/index.tsx -> " + "./stock"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$stock$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StockSkeleton"], {}, void 0, false, {
            fileName: "[project]/components/stocks/index.tsx",
            lineNumber: 13,
            columnNumber: 18
        }, this)
});
_c1 = Stock;
const Purchase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c2 = ()=>__turbopack_require__("[project]/components/stocks/stock-purchase.tsx [app-client] (ecmascript, async loader)")(__turbopack_import__).then((mod)=>mod.Purchase), {
    loadableGenerated: {
        modules: [
            "components/stocks/index.tsx -> " + "./stock-purchase"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-[375px] rounded-xl border bg-zinc-950 p-4 text-green-400 sm:h-[314px]"
        }, void 0, false, {
            fileName: "[project]/components/stocks/index.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
});
_c3 = Purchase;
const Stocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c4 = ()=>__turbopack_require__("[project]/components/stocks/stocks.tsx [app-client] (ecmascript, async loader)")(__turbopack_import__).then((mod)=>mod.Stocks), {
    loadableGenerated: {
        modules: [
            "components/stocks/index.tsx -> " + "./stocks"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$stocks$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StocksSkeleton"], {}, void 0, false, {
            fileName: "[project]/components/stocks/index.tsx",
            lineNumber: 28,
            columnNumber: 18
        }, this)
});
_c5 = Stocks;
const Events = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c6 = ()=>__turbopack_require__("[project]/components/stocks/events.tsx [app-client] (ecmascript, async loader)")(__turbopack_import__).then((mod)=>mod.Events), {
    loadableGenerated: {
        modules: [
            "components/stocks/index.tsx -> " + "./events"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$events$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsSkeleton"], {}, void 0, false, {
            fileName: "[project]/components/stocks/index.tsx",
            lineNumber: 33,
            columnNumber: 18
        }, this)
});
_c7 = Events;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_refresh__.register(_c, "Stock$dynamic");
__turbopack_refresh__.register(_c1, "Stock");
__turbopack_refresh__.register(_c2, "Purchase$dynamic");
__turbopack_refresh__.register(_c3, "Purchase");
__turbopack_refresh__.register(_c4, "Stocks$dynamic");
__turbopack_refresh__.register(_c5, "Stocks");
__turbopack_refresh__.register(_c6, "Events$dynamic");
__turbopack_refresh__.register(_c7, "Events");

})()),
"[project]/components/stocks/index.tsx [app-client] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.6_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.6_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$stock$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/stocks/stock-skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$stocks$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/stocks/stocks-skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$events$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/stocks/events-skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/stocks/spinner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/stocks/message.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/components/stocks/index.tsx [app-client] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/components/stocks/index.tsx [app-client] (ecmascript) <exports>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "BotCard": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BotCard"],
    "BotMessage": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BotMessage"],
    "Events": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Events"],
    "Purchase": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Purchase"],
    "Stock": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Stock"],
    "Stocks": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Stocks"],
    "SystemMessage": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemMessage"],
    "spinner": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spinner"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/stocks/message.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/stocks/spinner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/components/stocks/index.tsx [app-client] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/components/stocks/index.tsx [app-client] (ecmascript) <facade>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "BotCard": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["BotCard"],
    "BotMessage": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["BotMessage"],
    "Events": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Events"],
    "Purchase": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Purchase"],
    "Stock": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Stock"],
    "Stocks": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Stocks"],
    "SystemMessage": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["SystemMessage"],
    "spinner": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["spinner"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/components/stocks/index.tsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$stocks$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/components/stocks/index.tsx [app-client] (ecmascript) <exports>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/components/stocks/stocks.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Stocks": ()=>Stocks
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.6_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$3$2e$3$2e$17_openai$40$4$2e$56$2e$0_zod$40$3$2e$23$2e$8_$5f$react$40$18$2e$3$2e$1_sswr$40$2$2e$1$2e$0_svelte$40$4$2e$2$2e$19_$5f$svelte$40$4$2e$2$2e$19_vue$40$_wrejqlrui2gdliogi74j4qbrna$2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/ai@3.3.17_openai@4.56.0_zod@3.23.8__react@18.3.1_sswr@2.1.0_svelte@4.2.19__svelte@4.2.19_vue@_wrejqlrui2gdliogi74j4qbrna/node_modules/ai/rsc/dist/rsc-shared.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
function Stocks({ props: stocks }) {
    _s();
    const [, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$3$2e$3$2e$17_openai$40$4$2e$56$2e$0_zod$40$3$2e$23$2e$8_$5f$react$40$18$2e$3$2e$1_sswr$40$2$2e$1$2e$0_svelte$40$4$2e$2$2e$19_$5f$svelte$40$4$2e$2$2e$19_vue$40$_wrejqlrui2gdliogi74j4qbrna$2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUIState"])();
    const { submitUserMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$3$2e$3$2e$17_openai$40$4$2e$56$2e$0_zod$40$3$2e$23$2e$8_$5f$react$40$18$2e$3$2e$1_sswr$40$2$2e$1$2e$0_svelte$40$4$2e$2$2e$19_$5f$svelte$40$4$2e$2$2e$19_vue$40$_wrejqlrui2gdliogi74j4qbrna$2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActions"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex flex-col gap-2 overflow-y-scroll pb-4 text-sm sm:flex-row",
                children: stocks.map((stock)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex cursor-pointer flex-row gap-2 rounded-lg bg-zinc-800 p-2 text-left hover:bg-zinc-700 sm:w-52",
                        onClick: async ()=>{
                            const response = await submitUserMessage(`View ${stock.symbol}`);
                            setMessages((currentMessages)=>[
                                    ...currentMessages,
                                    response
                                ]);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `text-xl ${stock.delta > 0 ? 'text-green-600' : 'text-red-600'} flex w-11 flex-row justify-center rounded-md bg-white/10 p-2`,
                                children: stock.delta > 0 ? '↑' : '↓'
                            }, void 0, false, {
                                fileName: "[project]/components/stocks/stocks.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bold uppercase text-zinc-300",
                                        children: stock.symbol
                                    }, void 0, false, {
                                        fileName: "[project]/components/stocks/stocks.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-base text-zinc-500",
                                        children: [
                                            "$",
                                            stock.price.toExponential(1)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/stocks/stocks.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/stocks/stocks.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-auto flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${stock.delta > 0 ? 'text-green-600' : 'text-red-600'} bold text-right uppercase`,
                                        children: ` ${(stock.delta / stock.price * 100).toExponential(1)}%`
                                    }, void 0, false, {
                                        fileName: "[project]/components/stocks/stocks.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${stock.delta > 0 ? 'text-green-700' : 'text-red-700'} text-right text-base`,
                                        children: stock.delta.toExponential(1)
                                    }, void 0, false, {
                                        fileName: "[project]/components/stocks/stocks.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/stocks/stocks.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        ]
                    }, stock.symbol, true, {
                        fileName: "[project]/components/stocks/stocks.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/stocks/stocks.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$6_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 text-center text-sm text-zinc-500",
                children: "Note: Data and latency are simulated for illustrative purposes and should not be considered as financial advice."
            }, void 0, false, {
                fileName: "[project]/components/stocks/stocks.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/stocks/stocks.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(Stocks, "1dVz2EaMc6yv3eG5uitXlVfPrbs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$3$2e$3$2e$17_openai$40$4$2e$56$2e$0_zod$40$3$2e$23$2e$8_$5f$react$40$18$2e$3$2e$1_sswr$40$2$2e$1$2e$0_svelte$40$4$2e$2$2e$19_$5f$svelte$40$4$2e$2$2e$19_vue$40$_wrejqlrui2gdliogi74j4qbrna$2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUIState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$3$2e$3$2e$17_openai$40$4$2e$56$2e$0_zod$40$3$2e$23$2e$8_$5f$react$40$18$2e$3$2e$1_sswr$40$2$2e$1$2e$0_svelte$40$4$2e$2$2e$19_$5f$svelte$40$4$2e$2$2e$19_vue$40$_wrejqlrui2gdliogi74j4qbrna$2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActions"]
    ];
});
_c = Stocks;
var _c;
__turbopack_refresh__.register(_c, "Stocks");

})()),
"[project]/app/(chat)/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=_1ffdd6._.js.map