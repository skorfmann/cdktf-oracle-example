// https://www.terraform.io/docs/providers/oci/r/data_oci_marketplace_listing.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "banner": {
        "type": [
          "list",
          [
            "object",
            {
              "content_url": "string",
              "file_extension": "string",
              "mime_type": "string",
              "name": "string"
            }
          ]
        ],
        "computed": true
      },
      "categories": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "optional": true
      },
      "default_package_version": {
        "type": "string",
        "computed": true
      },
      "documentation_links": {
        "type": [
          "list",
          [
            "object",
            {
              "document_category": "string",
              "name": "string",
              "url": "string"
            }
          ]
        ],
        "computed": true
      },
      "icon": {
        "type": [
          "list",
          [
            "object",
            {
              "content_url": "string",
              "file_extension": "string",
              "mime_type": "string",
              "name": "string"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "is_featured": {
        "type": "bool",
        "computed": true
      },
      "keywords": {
        "type": "string",
        "computed": true
      },
      "languages": {
        "type": [
          "list",
          [
            "object",
            {
              "code": "string",
              "name": "string"
            }
          ]
        ],
        "computed": true
      },
      "license_model_description": {
        "type": "string",
        "computed": true
      },
      "links": {
        "type": [
          "list",
          [
            "object",
            {
              "href": "string",
              "rel": "string"
            }
          ]
        ],
        "computed": true
      },
      "listing_id": {
        "type": "string",
        "required": true
      },
      "long_description": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "package_type": {
        "type": "string",
        "computed": true
      },
      "publisher": {
        "type": [
          "list",
          [
            "object",
            {
              "contact_email": "string",
              "contact_phone": "string",
              "description": "string",
              "hq_address": "string",
              "id": "string",
              "links": [
                "list",
                [
                  "object",
                  {
                    "href": "string",
                    "rel": "string"
                  }
                ]
              ],
              "logo": [
                "list",
                [
                  "object",
                  {
                    "content_url": "string",
                    "file_extension": "string",
                    "mime_type": "string",
                    "name": "string"
                  }
                ]
              ],
              "name": "string",
              "website_url": "string",
              "year_founded": "string"
            }
          ]
        ],
        "computed": true
      },
      "regions": {
        "type": [
          "list",
          [
            "object",
            {
              "code": "string",
              "countries": [
                "list",
                [
                  "object",
                  {
                    "code": "string",
                    "name": "string"
                  }
                ]
              ],
              "name": "string"
            }
          ]
        ],
        "computed": true
      },
      "release_notes": {
        "type": "string",
        "computed": true
      },
      "screenshots": {
        "type": [
          "list",
          [
            "object",
            {
              "content_url": "string",
              "description": "string",
              "file_extension": "string",
              "mime_type": "string",
              "name": "string"
            }
          ]
        ],
        "computed": true
      },
      "short_description": {
        "type": "string",
        "computed": true
      },
      "support_contacts": {
        "type": [
          "list",
          [
            "object",
            {
              "email": "string",
              "name": "string",
              "phone": "string",
              "subject": "string"
            }
          ]
        ],
        "computed": true
      },
      "support_links": {
        "type": [
          "list",
          [
            "object",
            {
              "name": "string",
              "url": "string"
            }
          ]
        ],
        "computed": true
      },
      "system_requirements": {
        "type": "string",
        "computed": true
      },
      "tagline": {
        "type": "string",
        "computed": true
      },
      "time_released": {
        "type": "string",
        "computed": true
      },
      "usage_information": {
        "type": "string",
        "computed": true
      },
      "version": {
        "type": "string",
        "computed": true
      },
      "videos": {
        "type": [
          "list",
          [
            "object",
            {
              "name": "string",
              "url": "string"
            }
          ]
        ],
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciMarketplaceListingConfig extends TerraformMetaArguments {
  readonly compartmentId?: string;
  readonly listingId: string;
}
export class DataOciMarketplaceListingBanner extends ComplexComputedList {

  // content_url - computed: true, optional: false, required: true
  public get contentUrl() {
    return this.getStringAttribute('content_url');
  }

  // file_extension - computed: true, optional: false, required: true
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }

  // mime_type - computed: true, optional: false, required: true
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciMarketplaceListingDocumentationLinks extends ComplexComputedList {

  // document_category - computed: true, optional: false, required: true
  public get documentCategory() {
    return this.getStringAttribute('document_category');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }
}
export class DataOciMarketplaceListingIcon extends ComplexComputedList {

  // content_url - computed: true, optional: false, required: true
  public get contentUrl() {
    return this.getStringAttribute('content_url');
  }

  // file_extension - computed: true, optional: false, required: true
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }

  // mime_type - computed: true, optional: false, required: true
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciMarketplaceListingLanguages extends ComplexComputedList {

  // code - computed: true, optional: false, required: true
  public get code() {
    return this.getStringAttribute('code');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciMarketplaceListingLinks extends ComplexComputedList {

  // href - computed: true, optional: false, required: true
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: true
  public get rel() {
    return this.getStringAttribute('rel');
  }
}
export class DataOciMarketplaceListingPublisherLinks extends ComplexComputedList {

  // href - computed: true, optional: false, required: true
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: true
  public get rel() {
    return this.getStringAttribute('rel');
  }
}
export class DataOciMarketplaceListingPublisherLogo extends ComplexComputedList {

  // content_url - computed: true, optional: false, required: true
  public get contentUrl() {
    return this.getStringAttribute('content_url');
  }

  // file_extension - computed: true, optional: false, required: true
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }

  // mime_type - computed: true, optional: false, required: true
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciMarketplaceListingPublisher extends ComplexComputedList {

  // contact_email - computed: true, optional: false, required: true
  public get contactEmail() {
    return this.getStringAttribute('contact_email');
  }

  // contact_phone - computed: true, optional: false, required: true
  public get contactPhone() {
    return this.getStringAttribute('contact_phone');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // hq_address - computed: true, optional: false, required: true
  public get hqAddress() {
    return this.getStringAttribute('hq_address');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // links - computed: true, optional: false, required: true
  public get links() {
    return 'not implemented' as any;
  }

  // logo - computed: true, optional: false, required: true
  public get logo() {
    return 'not implemented' as any;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // website_url - computed: true, optional: false, required: true
  public get websiteUrl() {
    return this.getStringAttribute('website_url');
  }

  // year_founded - computed: true, optional: false, required: true
  public get yearFounded() {
    return this.getStringAttribute('year_founded');
  }
}
export class DataOciMarketplaceListingRegionsCountries extends ComplexComputedList {

  // code - computed: true, optional: false, required: true
  public get code() {
    return this.getStringAttribute('code');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciMarketplaceListingRegions extends ComplexComputedList {

  // code - computed: true, optional: false, required: true
  public get code() {
    return this.getStringAttribute('code');
  }

  // countries - computed: true, optional: false, required: true
  public get countries() {
    return 'not implemented' as any;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciMarketplaceListingScreenshots extends ComplexComputedList {

  // content_url - computed: true, optional: false, required: true
  public get contentUrl() {
    return this.getStringAttribute('content_url');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // file_extension - computed: true, optional: false, required: true
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }

  // mime_type - computed: true, optional: false, required: true
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciMarketplaceListingSupportContacts extends ComplexComputedList {

  // email - computed: true, optional: false, required: true
  public get email() {
    return this.getStringAttribute('email');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // phone - computed: true, optional: false, required: true
  public get phone() {
    return this.getStringAttribute('phone');
  }

  // subject - computed: true, optional: false, required: true
  public get subject() {
    return this.getStringAttribute('subject');
  }
}
export class DataOciMarketplaceListingSupportLinks extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }
}
export class DataOciMarketplaceListingVideos extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }
}

// Resource

export class DataOciMarketplaceListing extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciMarketplaceListingConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_marketplace_listing',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._listingId = config.listingId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // banner - computed: true, optional: false, required: true
  public banner(index: string) {
    return new DataOciMarketplaceListingBanner(this, 'banner', index);
  }

  // categories - computed: true, optional: false, required: true
  public get categories() {
    return this.getListAttribute('categories');
  }

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string | undefined) {
    this._compartmentId = value;
  }

  // default_package_version - computed: true, optional: false, required: true
  public get defaultPackageVersion() {
    return this.getStringAttribute('default_package_version');
  }

  // documentation_links - computed: true, optional: false, required: true
  public documentationLinks(index: string) {
    return new DataOciMarketplaceListingDocumentationLinks(this, 'documentation_links', index);
  }

  // icon - computed: true, optional: false, required: true
  public icon(index: string) {
    return new DataOciMarketplaceListingIcon(this, 'icon', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_featured - computed: true, optional: false, required: true
  public get isFeatured() {
    return this.getBooleanAttribute('is_featured');
  }

  // keywords - computed: true, optional: false, required: true
  public get keywords() {
    return this.getStringAttribute('keywords');
  }

  // languages - computed: true, optional: false, required: true
  public languages(index: string) {
    return new DataOciMarketplaceListingLanguages(this, 'languages', index);
  }

  // license_model_description - computed: true, optional: false, required: true
  public get licenseModelDescription() {
    return this.getStringAttribute('license_model_description');
  }

  // links - computed: true, optional: false, required: true
  public links(index: string) {
    return new DataOciMarketplaceListingLinks(this, 'links', index);
  }

  // listing_id - computed: false, optional: false, required: true
  private _listingId: string;
  public get listingId() {
    return this._listingId;
  }
  public set listingId(value: string) {
    this._listingId = value;
  }

  // long_description - computed: true, optional: false, required: true
  public get longDescription() {
    return this.getStringAttribute('long_description');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // package_type - computed: true, optional: false, required: true
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // publisher - computed: true, optional: false, required: true
  public publisher(index: string) {
    return new DataOciMarketplaceListingPublisher(this, 'publisher', index);
  }

  // regions - computed: true, optional: false, required: true
  public regions(index: string) {
    return new DataOciMarketplaceListingRegions(this, 'regions', index);
  }

  // release_notes - computed: true, optional: false, required: true
  public get releaseNotes() {
    return this.getStringAttribute('release_notes');
  }

  // screenshots - computed: true, optional: false, required: true
  public screenshots(index: string) {
    return new DataOciMarketplaceListingScreenshots(this, 'screenshots', index);
  }

  // short_description - computed: true, optional: false, required: true
  public get shortDescription() {
    return this.getStringAttribute('short_description');
  }

  // support_contacts - computed: true, optional: false, required: true
  public supportContacts(index: string) {
    return new DataOciMarketplaceListingSupportContacts(this, 'support_contacts', index);
  }

  // support_links - computed: true, optional: false, required: true
  public supportLinks(index: string) {
    return new DataOciMarketplaceListingSupportLinks(this, 'support_links', index);
  }

  // system_requirements - computed: true, optional: false, required: true
  public get systemRequirements() {
    return this.getStringAttribute('system_requirements');
  }

  // tagline - computed: true, optional: false, required: true
  public get tagline() {
    return this.getStringAttribute('tagline');
  }

  // time_released - computed: true, optional: false, required: true
  public get timeReleased() {
    return this.getStringAttribute('time_released');
  }

  // usage_information - computed: true, optional: false, required: true
  public get usageInformation() {
    return this.getStringAttribute('usage_information');
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // videos - computed: true, optional: false, required: true
  public videos(index: string) {
    return new DataOciMarketplaceListingVideos(this, 'videos', index);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      listing_id: this._listingId,
    };
  }
}
