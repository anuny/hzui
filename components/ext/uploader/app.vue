<template>
	<div class="ext-uploader" ref="main" id="ext-uploader-main">
		<upload-iframe :name="iframeName" ref="iframe" @iframeReload="iframeReload"/>
		<upload-form :name="formName" ref="form" :target="iframeName" :url="url" :field="field" :type="type" :data="data" @selectFile="selectFile" />
		<upload-crop ref="crop" v-if="isCrop" :options="crop" :src="src"  @onCrop="onCrop" @save="cropSave" @close="cropClose"/>
	</div>
</template>
<script src="./mixin"></script>