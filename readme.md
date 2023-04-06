<h3>Assigment:<h3>
    <p>Write tests for the following, and then make the tests pass!</p>

  <ol>
      <li>
        <p>A <code>capitalize</code> function that takes a string and returns it with the first character capitalized.
        </p>
      </li>
      <li>
        <p>A <code>reverseString</code> function that takes a string and returns it reversed.</p>
      </li>
      <li>
        <p>A <code>calculator</code> object that contains functions for the basic operations: <code>add</code>,
          <code>subtract</code>, <code>divide</code>, and <code>multiply</code>. Each of these functions should take two
          numbers and return the correct calculation.</p>
      </li>
      <li>
        <p>A <code>caesarCipher</code> function that takes a string and a shift factor and returns it with each
          character “shifted”. Read more about how a Caesar cipher works on <a
            href="http://practicalcryptography.com/ciphers/caesar-cipher/" target="_blank"
            rel="noopener noreferrer">this website</a>.</p>

  <ol>
          <li>Don’t forget to test wrapping from <code>z</code> to <code>a</code>.</li>
          <li>Don’t forget to test keeping the same case.</li>
          <li>Don’t forget to test punctuation!</li>
          <li>For this one, you may want to split the final function into a few smaller functions. One concept of
            Testing is that you don’t need to explicitly test <em>every</em> function you write… Just the public ones.
            So in this case you only need tests for the final <code>caesarCipher</code> function. If it works as
            expected you can rest assured that your smaller helper functions are doing what they’re supposed to.</li>
        </ol>
      </li>
      <li>
        <p>An <code>analyzeArray</code> function that takes an array of numbers and returns an object with the following
          properties: <code>average</code>, <code>min</code>, <code>max</code>, and <code>length</code>.</p>

   <pre class="line-numbers language-javascript"
          tabindex="0"><code class="language-javascript"><span class="token keyword">const</span> object <span class="token operator">=</span> <span class="token function">analyzeArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

object <span class="token operator">==</span> <span class="token punctuation">{</span>
<span class="token literal-property property">average</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
<span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
<span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">6</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

 </li>
   </ol>