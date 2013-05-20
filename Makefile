REPORTER=dot

test/built.js: index.js test/*
	@node_modules/.bin/sourcegraph.js \
		-p mocha,nodeish \
		test/browser.js \
		| node_modules/.bin/bigfile.js > $@

test:
	@node_modules/.bin/_mocha \
		--bail \
		--reporter $(REPORTER) \
		test/*.test.js

install:
	npm install
	packin install

.PHONY: test	
