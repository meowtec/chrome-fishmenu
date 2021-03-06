<div class="page-panel" id="help">
  <h2 class="sub-header">帮助</h2>
  <div class="md-box">
    <h3>自定义搜索</h3>

    <p>每一个页面都对应着一个 URL，当我们使用搜索引擎搜索一个关键词时，这个关键词就会被编码到 URL 中，比如我使用 Google 搜索 <code>NASA</code>，我们看到的 URL 是：
      <code class="code-block">
        https://www.google.com.hk/#newwindow=1&amp;safe=off&amp;q=NASA
      </code>
      在这个 URL 中，可以找到 <code>q=NASA</code>，也就是说，当我们访问这个 URL 时，<code>NASA</code> 作为参数 <code>q</code> 被发送到服务器。
    </p>
    <p>当然，这个 q 是开发者自己定的。他们也可以使用 <code>kw</code> <code>wd</code> 等作为参数名。</p>
    <p>如果你要把 Google 添加到右键，只需要用 <code>%#123;word&#125;</code> 替换掉 <code>NASA</code> ，得到下面的 URL：
      <code class="code-block">
        https://www.google.com.hk/#newwindow=1&amp;safe=off&amp;q=%#123;word&#125;
      </code>
    </p>
    <p>网上很多链接都是很长的一段，比如百度搜索：
      <code class="code-block">
        https://www.baidu.com/s?wd=wordpress&amp;rsv_spt=1&amp;issp=1&amp;f=8&amp;rsv_bp=0&amp;ie=utf-8&amp;tn=baiduhome_pg&amp;rsv_enter=1&amp;rsv_sug3=16&amp;rsv_sug4=1380&amp;rsv_sug1=16&amp;rsv_sug2=0&amp;inputT=7390&amp;rsv_sug=1
      </code>
      这里面的每一个<code>&amp;aaa=bbb</code>都是一对参数，可以看到我们要搜索的参数是<code>wd=wordpress</code>，而其他的呢，有一些是百度做统计用的，还有的就不清楚了。我们可以试着精简掉：
      <code class="code-block">
        https://www.baidu.com/s?wd=wordpress
      </code>
      发现也可以正常访问。
    </p>
    <p>最后，要添加百度到右键，只需要添加
      <code class="code-block">
        https://www.baidu.com/s?wd=%#123;word&#125;
      </code>
    </p>
    <br/>
    <h3>自定义分享</h3>
    <p>自定义分享的原理和前面一样的。要做的就是找到现成的url。</p>
    <p>现在很多网站都有分享组件，例如cnbeta。找到这样的网站，点击分享，浏览器会打开分享窗口。以分享到微博为例，新窗口的链接如下：</p>
    <code class="code-block">https://service.weibo.com/share/share.php?url=https%3A%2F%2Fshare.baidu.com%2F%230-tsina-1-79265-397232819ff9a47a7b7e80a40613cfe1&title=%E7%99%BE%E5%BA%A6%E5%88%86%E4%BA%AB%EF%BC%8C%E4%B8%BA%E6%82%A8%E5%B8%A6%E6%9D%A5%E6%9B%B4%E5%A4%9A%E6%B5%81%E9%87%8F%20-%20%E7%99%BE%E5%BA%A6%E5%88%86%E4%BA%AB&appkey=1343713053&searchPic=false</code>
    <p>啊，好长一段。</p>
    <p>请注意<code class="code-block">url=https%3A%2F%2Fshare.baidu.com%2F%230-tsina-1-79265-397232819ff9a47a7b7e80a40613cfe1</code>
      以及
      <code class="code-block">title=%E7%99%BE%E5%BA%A6%E5%88%86%E4%BA%AB%EF%BC%8C%E4%B8%BA%E6%82%A8%E5%B8%A6%E6%9D%A5%E6%9B%B4%E5%A4%9A%E6%B5%81%E9%87%8F%20-%20%E7%99%BE%E5%BA%A6%E5%88%86%E4%BA%AB</code>
    </p>
    <p>以上两个参数（url和title）分别表示要分享网页的url地址和标题，你可能会觉得是一堆乱码，是因为他们被转码了。特殊字符和汉字在url中会被转码。<br/>
    这里的参数名不一定就是url和title，不同的社交平台可能有不同的约定。一般来说，url可能有<code>u,from,link</code>等等可能，而title也有可能是<code>t,name</code>等等。
    </p>
    <p>和前面类似，我们把参数替换，得到</p>
    <code class="code-block">https://service.weibo.com/share/share.php?url=%#123;url&#125;&title=%#123;title&#125;</code>
    <p>其他的参数都删掉。</p>
  </div>
</div>

<style lang="less">
  .md-box {
    color: #666;
    display: block;
    padding: 0;
    margin: 0;
    font-size: 12px;

    div,
    ul,
    li,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    summary {
      display: block;
      padding: 0;
      margin: 0;
      background: none;
      border: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 3em;
    }

    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }

    h2 {
      font-size: 1.5em;
    }

    h3 {
      font-size: 1.17em;
      color: #26a69a;
    }

    h4 {
      font-size: 1em;
    }

    h5 {
      font-size: 0.83em;
    }

    h6 {
      font-size: 0.67em;
    }

    p {
      margin-bottom: 1.5em;
    }

    code {
      font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
      display: inline;
    }

    .code-block {
      display: block;
      padding: 8px 10px;
      margin: 10px 0;
      background: #666;
      color: #fff;
      border-radius: 6px;
    }
  }
</style>
