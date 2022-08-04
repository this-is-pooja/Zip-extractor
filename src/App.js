import React, { useState } from 'react';
import Content from './components/Content'
import { Box, Text, VStack } from "@chakra-ui/react";

function App() {

  const [showAllFormats, setShowAllFormats] = useState(false);
  const showdata = () => {
    setShowAllFormats(true)
  }

  return (
    <>
      <VStack spacing={6} textAlign="center" mt="6rem">
        <Box>
          <Text fontWeight="700" fontSize="20px">Zip Extractor</Text>
          <Text width="40rem" fontSize="15px">
            Zip Extractor is a small and easy online tool that can extract over 70 types of compressed
            files, such as 7z, zipx, rar, tar, exe, dmg and much more.
          </Text>
        </Box>
        <Box>
          <Content />
        </Box>
        <Box>
          <Text fontSize="16px">Supported formats:</Text>
          <Text fontSize="14px">7z, zipx, rar, tar, exe, dmg, iso, zip, msi, nrg, gz, cab, bz2, wim, ace
            <span
              onClick={showdata}
              style={{
                cursor: showAllFormats ? "auto" : "pointer",
                color: showAllFormats ? "#fff" : "#0080FF",
                marginLeft: "4px"
              }}>
              and 54 more
            </span>
          </Text>
          {showAllFormats &&
            <Text width="42rem" fontSize="14px">
              alz, ar, arc, arj, bin, cdi, chm, cpt, cpio, cramfs, crunch, deb, dd, dms, ext, fat, format,
              gpt, hfs, ihex, lbr, lzh, lzma, lzm, mbr, mdf, nsa, nds, nsis, ntfs, pit, pak, pdf, pp, qcow2,
              rpm, sar, squashfs, squeeze, sit, sitx, swf, udf, uefi, vdi, vhd, vmdk, warc, xar, xz, z, zoo, zi, jar
            </Text>
          }
        </Box>
      </VStack>
    </>
  )
}

export default App