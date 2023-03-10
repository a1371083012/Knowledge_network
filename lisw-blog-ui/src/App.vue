<template>
  <Header></Header>
	<router-view v-slot="{ Component, route }">
		<transition :name="'fade'" mode="out-in">
			<!-- <keep-alive include="Home"> -->
				<component :is="Component" class="bodyView"/>
			<!-- </keep-alive> -->
		</transition>
	</router-view>
</template>

<script lang="ts" setup>
  import Header from '@/components/Header.vue'
</script>

<style lang="scss" scoped>
	.bodyView{
		min-height: calc(100vh - 40px);
		// overflow: hidden;
	}

	/* #region 路由过度动画：fade */
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
	/* #endregion */

	/* #region 路由过度动画：slide */
	.slide-enter-active,
	.slide-leave-active {
		transition: all 0.75s ease-out;
	}

	.slide-enter-to {
		position: absolute;
		right: 0;
	}

	.slide-enter-from {
		position: absolute;
		right: -100%;
	}

	.slide-leave-to {
		position: absolute;
		left: -100%;
	}

	.slide-leave-from {
		position: absolute;
		left: 0;
	}
	/* #endregion */

	/* #region 路由过度动画：scale */
	.scale-enter-active,
	.scale-leave-active {
		transition: all 0.5s ease;
	}

	.scale-enter-from,
	.scale-leave-to {
		opacity: 0;
		transform: scale(0.9);
	}
	/* #endregion */

	/* #region 路由过度动画：scale-slide */
	.scale-slide-enter-active,
	.scale-slide-leave-active {
		position: absolute;
		transition: all 0.85s ease;
	}

	.scale-slide-enter-from {
		left: -100%;
	}

	.scale-slide-enter-to {
		left: 0%;
	}

	.scale-slide-leave-from {
		transform: scale(1);
	}

	.scale-slide-leave-to {
		transform: scale(0.8);
	}
	/* #endregion */
</style>
