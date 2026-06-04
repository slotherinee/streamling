-- CreateTable
CREATE TABLE "watchlist" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tmdbId" INTEGER NOT NULL,
    "mediaType" TEXT NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "watchlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "progress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tmdbId" INTEGER NOT NULL,
    "mediaType" TEXT NOT NULL,
    "percent" INTEGER NOT NULL DEFAULT 0,
    "season" INTEGER,
    "episode" INTEGER,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "progress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "watchlist_userId_tmdbId_mediaType_key" ON "watchlist"("userId", "tmdbId", "mediaType");

-- CreateIndex
CREATE UNIQUE INDEX "progress_userId_tmdbId_mediaType_key" ON "progress"("userId", "tmdbId", "mediaType");

-- AddForeignKey
ALTER TABLE "watchlist" ADD CONSTRAINT "watchlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "progress" ADD CONSTRAINT "progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
